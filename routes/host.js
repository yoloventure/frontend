const express = require('express');
const router = express.Router();
const Host = require('../models/host');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const DIR = 'upload_images/';
const EmailList = require("../models/emailList");
var nodemailer = require('nodemailer');
var storage = require("azure-storage")
const {BlobServiceClient} = require("@azure/storage-blob");
const { DefaultAzureCredential } = require("@azure/identity");
  const connStr = "DefaultEndpointsProtocol=https;AccountName=hdrive42078740948;AccountKey=X1fJz9wTNEfYhvjtweIPuMSbZoplBxqB61Gp+92OwePkFOxDnqPRyi+EEhX56FAOfxHI+oRryV0NppOSu2/B3Q==;EndpointSuffix=core.windows.net";

  const account = "hdrive42078740948";
  const accountKey = "X1fJz9wTNEfYhvjtweIPuMSbZoplBxqB61Gp+92OwePkFOxDnqPRyi+EEhX56FAOfxHI+oRryV0NppOSu2/B3Q==";
  const defaultAzureCredential = new DefaultAzureCredential();
function generateSasToken() {
  var startDate = new Date();
    var expiryDate = new Date();
    startDate.setTime(startDate.getTime() - 5*60*1000);
    expiryDate.setTime(expiryDate.getTime() + 24*60*60*1000);
    var AccountSasConstants = storage.Constants.AccountSasConstants;
    var sharedAccessPolicy = {
      AccessPolicy: {
        Services: AccountSasConstants.Services.BLOB ,
        ResourceTypes: AccountSasConstants.Resources.SERVICE + 
                       AccountSasConstants.Resources.CONTAINER +
                       AccountSasConstants.Resources.OBJECT,
        Permissions: AccountSasConstants.Permissions.READ + 
                     AccountSasConstants.Permissions.ADD +
                     AccountSasConstants.Permissions.CREATE +
                     AccountSasConstants.Permissions.WRITE +
                     AccountSasConstants.Permissions.DELETE +
                     AccountSasConstants.Permissions.LIST,
        Protocols: AccountSasConstants.Protocols.HTTPSORHTTP,
        Start: startDate,
        Expiry: expiryDate
      }
      
    };
    var sas =storage.generateAccountSharedAccessSignature(account,accountKey,sharedAccessPolicy);
    return sas;
}


const transporter = nodemailer.createTransport({
   host: 'smtp.gmail.com',
  service: 'gmail',
  auth: {
    user: '1341452029zsr',
    pass: 'zsr739146739146'
  }
});

async function uploadImage(photoId){
  const sas = generateSasToken();
const blobServiceClient = new BlobServiceClient(`https://${account}.blob.core.windows.net${sas}`);

  const containerClient = blobServiceClient.getContainerClient('yolo');
  const blobName = "newblob" + new Date().getTime();
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  const uploadBlobResponse = await blockBlobClient.upload(photoId, photoId.length);
  console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId);
}
router.post('/upload', function(req, res){
    console.log("hi");
    uploadImage(req.body.files[0]);
    // const reqFiles = [];
    // const url = req.protocol + '://' 
    // console.log("Upload");
    // console.log(req.files[0].name);
    // for (var i = 0; i < 2; i++) {
    //     reqFiles.push(url + '/upload_images/'+req.files[i].filename)
    // }

    // Host.findByIdAndUpdate({_id: req.params.id},{ imgCollection: reqFiles }, {useFindAndModify: false})
    // .then(function (host) {
    // res.send(host);
  });
    // const user = new User({
    //     _id: new mongoose.Types.ObjectId(),
    //     name: req.body.name,
    //     profileImg: url + '/public/' + req.file.filename
    // });
    // user.save().then(result => {
    //     res.status(201).json({
    //         message: "User registered successfully!",
    //         userCreated: {
    //             _id: result._id,
    //             profileImg: result.profileImg
    //         }
    //     })
    // }).catch(err => {
    //     console.log(err),
    //         res.status(500).json({
    //             error: err
    //         });
    // })


//Get all host applications
router.get('/', function (req, res) {
  Host.find()
  // .populate('user')
  // .populate('company')
  // .populate('location')
  // .populate('experiences')
  .then(function (hosts) {
    res.send(hosts);
  });
});

//Retrive application by Id
router.get('/:id', function (req, res, next) {
  Host.findById(req.params.id)
  // .populate('user')
  // .populate('company')
  // .populate('location')
  // .populate('experiences')
  .then(function (host) {
    res.send(host);
  });
});

//create and save new host application instance
router.post('/', function (req, res, next) {
  Host.findOne({user:req.body.user}).then(host=>{
        if (host) {
          errors =
            'There is already a host associated with this account.';
          return res.status(400).json({
            success: false,
            error: errors
          });
        } else {
            var mailOptions = {
            from: '1341452029zsr@gmail.com',
            to: req.body.email,
            subject: 'Yolo Shadow Host Application Received!',
            text: 'Dear '+req.body.fname+', Thank you for applying! We will notify you when the decision is made.'
          };
                                      transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
          Host.create(req.body)
            .then(function (host) {
              res.send(host); //send back info to client
            })
            .catch(next);
        }
  })

});

//edit application using put requests
router.put('/:id', function (req, res, next) {
  //find and update specific application
  Host.findByIdAndUpdate( req.params.id, req.body).then(function () {
    //find and send back updated application for display
    Host.findOne({_id: req.params.id}, req.body).then(function (host) {
      res.send(host);
    });
  });
});

//edit application using put requests
router.put('add_reservation/:id', function (req, res, next) {
  //find and update specific application
  Host.findByIdAndUpdate( req.params.id, {$push: {"reservationStack": req.body}}, ).then(function () {
    //find and send back updated application for display
    Host.findOne({_id: req.params.id}, req.body).then(function (host) {
      res.send(host);
    });
  });
});

//delete specific application
router.delete('/:id', function (req, res, next) {
  Host.findByIdAndRemove(req.params.id).then(function (host) {
    res.send(host);
  });
});

module.exports = router;
