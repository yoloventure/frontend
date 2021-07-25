//Empty class for now, potentially use to operate all the azure storage works 
//for security reasons in the back end.
// const
//       express = require('express')
//     , router = express.Router()

//     , multer = require('multer')
//     , inMemoryStorage = multer.memoryStorage()
//     , uploadStrategy = multer({ storage: inMemoryStorage }).single('image')

//     , getStream = require('into-stream')
// ;

// const {BlobServiceClient} = require("@azure/storage-blob");
// const { DefaultAzureCredential } = require("@azure/identity"); // Change to "@azure/storage-blob" in your package
// const connStr = "DefaultEndpointsProtocol=https;AccountName=hdrive42078740948;AccountKey=X1fJz9wTNEfYhvjtweIPuMSbZoplBxqB61Gp+92OwePkFOxDnqPRyi+EEhX56FAOfxHI+oRryV0NppOSu2/B3Q==;EndpointSuffix=core.windows.net";
// const blobServiceClient = BlobServiceClient.fromConnectionString(connStr);
// const account = "hdrive42078740948";
// const accountKey = "X1fJz9wTNEfYhvjtweIPuMSbZoplBxqB61Gp+92OwePkFOxDnqPRyi+EEhX56FAOfxHI+oRryV0NppOSu2/B3Q==";
// const defaultAzureCredential = new DefaultAzureCredential();

// async function connectAzure() {
// }

// async function streamToString(readableStream) {
//   return new Promise((resolve, reject) => {
//     const chunks = [];
//     readableStream.on("data", data => {
//       chunks.push(data.toString());
//     });
//     readableStream.on("end", () => {
//       resolve(chunks.join(""));
//     });
//     readableStream.on("error", reject);
//   });
// }
// try {
// connectAzure()
//   .catch(err => {
//     console.log(err.message);
//   });
//     router.post('/upload', uploadStrategy, (req, res) => {
//         const containerClient = blobServiceClient.getContainerClient(containerName);
//         const blobName = getBlobName(req.file.originalname);
//         const stream = getStream(req.file.buffer);
//         const streamLength = req.file.buffer.length;

//         const blockBlobClient = containerClient.getBlockBlobClient(blobName);
//         blockBlobClient.uploadStream(stream, streamLength)
//         .then(response => {
//             res.send('Upload block blob ${blobName} successfully (requestId=${response.requestId})');
//         });

//     });

// } catch {
//     console.log("fileUpload.js: Error while connecting to Azure (check env variables)");
// }


// module.exports = router;
