const express = require("express");
const router = express.Router();

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


//Get all subscribed emails
router.get("/", function(req, res) {
  EmailList.find({}).then(function(emails) {
    res.send(emails);
  });
});

router.post("/", function(req, res, next){
  var mailOptions = {
  from: '1341452029zsr@gmail.com',
  to: req.body.email,
  subject: 'Thank You For Subscribing Yoloshadow Newsletter!',
  text: 'Dear '+req.body.fname+', Thank you for subscribing out Newsletter'
};
  EmailList.findOne({
                    email:	req.body.email

                  }).then((emailList) => {
                          if(emailList){
                            transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
                            return res.status(409).json({
                                  success:false
                            })

                          }else{
                            EmailList.create(req.body)
                              .then(function(element) {
                                res.send(element); //send back info to client
                              })
                              .catch(next);
                          }

                  }	);

});

module.exports = router;
