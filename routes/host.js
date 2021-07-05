const express = require("express");
const router = express.Router();
const Host = require("../models/host");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const DIR = "upload_images/";
const EmailList = require("../models/emailList");
var nodemailer = require("nodemailer");
var storage = require("azure-storage");
const { BlobServiceClient } = require("@azure/storage-blob");
const { DefaultAzureCredential } = require("@azure/identity");
  const connStr = "DefaultEndpointsProtocol=https;AccountName=hdrive42078740948;AccountKey=X1fJz9wTNEfYhvjtweIPuMSbZoplBxqB61Gp+92OwePkFOxDnqPRyi+EEhX56FAOfxHI+oRryV0NppOSu2/B3Q==;EndpointSuffix=core.windows.net";

//set up email sender
const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: 'yoloshadower.tech@gmail.com',
    pass: 'as7CK&%B4~'
  }, tls: {
    rejectUnauthorized: false
  }
});

//Get all host applications
router.get("/", function (req, res) {
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
router.get("/:id", function (req, res, next) {
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
router.post("/", function (req, res, next) {
  Host.findOne({ user: req.body.user }).then((host) => {
    if (host) {
      errors = "There is already a host associated with this account.";
      return res.status(400).json({
        success: false,
        error: errors,
      });
    } else {
      // email notification for round1
      let html = `<h2> Your job shadow application round1 has received at Yolo Shadow</h2>
                  <p>Your Yolo Shadow shadower round1 application has been received. We will notify you when decision is made.</p>
                  <br><p>Sincerely</p><p>The Yolo Shadow Team</p>`;
      //email configuration
      var mailOptions1 = {
      from: "yoloshadower.tech@gmail.com",
      to: req.body.email,
      subject: +req.body.fname+", You Yolo Shadow Job Application Round1 Has Been Received",
      html: html
      };
      transporter.sendMail(mailOptions1, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);

          Host.create(req.body)
            .then(function (host) {
              res.send(host); //send back info to client
            })
          .catch(next);
        }
      });
      Host.create(req.body)
        .then(function (host) {
          res.send(host); //send back info to client
        })
        .catch(next);
    }
  });
});

//edit application using put requests
router.put('/:id', function (req, res, next) {
            //find and update specific application
          Host.findByIdAndUpdate(req.params.id, req.body).then(function () {
            //find and send back updated application for display
            Host.findOne({ _id: req.params.id }, req.body).then(function (host) {
              res.send(host);
            });
          });
          //mail configuration for round2
          let html2 = `<h2> Your job shadow application round2 has received at Yolo Shadow</h2>
          <p>Your Yolo Shadow shadower round1 application has been received. We will notify you when decision is made.</p>
          <br><p>Sincerely</p><p>The Yolo Shadow Team</p>`;
          var mailOption2 = {
          from: "yoloshadower.tech@gmail.com",
          to: req.body.email,
          subject: +req.body.fname+", You Yolo Shadow Job Application Round2 Has Been Received",
          html: html2
          };
          transporter.sendMail(mailOptions2, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

});

//edit application using put requests
router.put("add_reservation/:id", function (req, res, next) {
  //find and update specific application
  Host.findByIdAndUpdate(req.params.id, {
    $push: { reservationStack: req.body },
  }).then(function () {
    //find and send back updated application for display
    Host.findOne({ _id: req.params.id }, req.body).then(function (host) {
      res.send(host);
    });
  });
});

//delete specific application
router.delete("/:id", function (req, res, next) {
  Host.findByIdAndRemove(req.params.id).then(function (host) {
    res.send(host);
  });
});

router.post("/:id", function (req, res, next) {
  //find and update specific application
  Host.findByIdAndUpdate(req.params.id, req.body).then(function () {
    //find and send back updated application for display
    Host.findOne({ _id: req.params.id }, req.body).then(function (host) {
      console.log(host);
      res.send(host);
    });
  });
});

module.exports = router;
