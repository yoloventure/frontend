const
      express = require('express')
    , router = express.Router()

    , multer = require('multer')
    , inMemoryStorage = multer.memoryStorage()
    , uploadStrategy = multer({ storage: inMemoryStorage }).single('image')

    , getStream = require('into-stream')
;

const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");
const account = process.env.ACCOUNT_NAME;
const accountKey = process.env.ACCOUNT_KEY;

const containerName = 'yolo';

const handleError = (err, res) => {
    res.status(500);
    res.render('error', { error: err });
};

const getBlobName = originalName => {
    //const identifier = Math.random().toString().replace(/0\./, ''); // remove "0." from start of string
    const identifier = Date.now();
    return '${identifier}-${originalName}';
};
 
try {
    // Use StorageSharedKeyCredential with storage account and account key
    const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);
    const blobServiceClient = new BlobServiceClient(
    `https://${account}.blob.core.windows.net`,
    sharedKeyCredential
    );

    router.post('/', uploadStrategy, (req, res) => {
        const containerClient = blobServiceClient.getContainerClient(containerName);
    
        //const content = "Hello world!";
        const blobName = getBlobName(req.file.originalname);
        const stream = getStream(req.file.buffer);
        const streamLength = req.file.buffer.length;

        const blockBlobClient = containerClient.getBlockBlobClient(blobName);
        blockBlobClient.uploadStream(stream, streamLength)
        .then(response => {
            res.send('Upload block blob ${blobName} successfully (requestId=${response.requestId})');
        });

    });

} catch {
    console.log("fileUpload.js: Error while connecting to Azure (check env variables)");
}


module.exports = router;