const
      express = require('express')
    , router = express.Router()

    , multer = require('multer')
    , inMemoryStorage = multer.memoryStorage()
    , uploadStrategy = multer({ storage: inMemoryStorage }).single('image')

    , getStream = require('into-stream')
;

const { DefaultAzureCredential } = require("@azure/identity");
const { BlobServiceClient } = require("@azure/storage-blob");
 
const account = process.env.HDRIVE_AZURE_STORAGE;
const defaultAzureCredential = new DefaultAzureCredential();
 
const blobServiceClient = new BlobServiceClient(
  `https://${account}.blob.core.windows.net`,
  defaultAzureCredential
);
 
const containerName = process.env.HDRIVE_AZURE_CONTAINER;

const handleError = (err, res) => {
    res.status(500);
    res.render('error', { error: err });
};

const getBlobName = originalName => {
    //const identifier = Math.random().toString().replace(/0\./, ''); // remove "0." from start of string
    const identifier = Date.now();
    return '${identifier}-${originalName}';
};

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

module.exports = router;