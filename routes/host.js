const express = require('express');
const router = express.Router();
const Host = require('../models/host');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const DIR = 'upload_images/';
const EmailList = require("../models/emailList");
var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
   host: 'smtp.gmail.com',
  service: 'gmail',
  auth: {
    user: '1341452029zsr',
    pass: 'zsr739146739146'
  }
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});
router.post('/:id', upload.any(), (req, res, next) => {
    console.log("hi");
    console.log(req.file);
    const reqFiles = [];
    const url = req.protocol + '://' 
    console.log("Upload");
    console.log(req.files[0].name);
    for (var i = 0; i < 2; i++) {
        reqFiles.push(url + '/upload_images/'+req.files[i].filename)
    }

    Host.findByIdAndUpdate({_id: req.params.id},{ imgCollection: reqFiles }, {useFindAndModify: false})
    .then(function (host) {
    res.send(host);
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

})
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

//delete specific application
router.delete('/:id', function (req, res, next) {
  Host.findByIdAndRemove(req.params.id).then(function (host) {
    res.send(host);
  });
});

module.exports = router;
