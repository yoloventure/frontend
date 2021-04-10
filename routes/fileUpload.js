const
      express = require('express')
    , router = express.Router()

    , multer = require('multer')
    , inMemoryStorage = multer.memoryStorage()
    , uploadStrategy = multer({ storage: inMemoryStorage }).single('image')

    , getStream = require('into-stream')
;

const {BlobServiceClient} = require("@azure/storage-blob");
const { DefaultAzureCredential } = require("@azure/identity"); // Change to "@azure/storage-blob" in your package
const connStr = "DefaultEndpointsProtocol=https;AccountName=hdrive42078740948;AccountKey=X1fJz9wTNEfYhvjtweIPuMSbZoplBxqB61Gp+92OwePkFOxDnqPRyi+EEhX56FAOfxHI+oRryV0NppOSu2/B3Q==;EndpointSuffix=core.windows.net";
const blobServiceClient = BlobServiceClient.fromConnectionString(connStr);
const account = "hdrive42078740948";
const accountKey = "X1fJz9wTNEfYhvjtweIPuMSbZoplBxqB61Gp+92OwePkFOxDnqPRyi+EEhX56FAOfxHI+oRryV0NppOSu2/B3Q==";
const defaultAzureCredential = new DefaultAzureCredential();
  // const blobServiceClient = new BlobServiceClient(
  // `https://${account}.blob.core.windows.net`,
  // defaultAzureCredential
  // );
async function connectAzure() {
  //  const containerName = `newcontainer${new Date().getTime()}`;
  // const containerClient = blobServiceClient.getContainerClient(containerName);
  // const createContainerResponse = await containerClient.create();
  // console.log(`Create container ${containerName} successfully`, createContainerResponse.requestId)
  //   let i = 1;
  // let containers = blobServiceClient.listContainers();
  // for await (const container of containers) {
  //   console.log(`Container ${i++}: ${container.name}`);
  // }
  // const containerClient = blobServiceClient.getContainerClient('yolo');

  // const content = "Hello world!";
  // const blobName = "newblob" + new Date().getTime();
  // const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  // const uploadBlobResponse = await blockBlobClient.upload(content, content.length);
  // console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId);
}

// A helper method used to read a Node.js readable stream into string
async function streamToString(readableStream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readableStream.on("data", data => {
      chunks.push(data.toString());
    });
    readableStream.on("end", () => {
      resolve(chunks.join(""));
    });
    readableStream.on("error", reject);
  });
}
try {
    // Use StorageSharedKeyCredential with storage account and account key
connectAzure()
  .catch(err => {
    console.log(err.message);
  });
    router.post('/upload', uploadStrategy, (req, res) => {
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
