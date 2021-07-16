const express = require("express");
const router = express.Router();

const EmailList = require("../models/emailList");
const nodemailer = require('nodemailer');
//nodemailer template package, might be useful in the future to make the email
//look nicer, keep it for now
// const hbs = require('nodemailer-express-handlebars')

//I decided to use our tech email as the sender, in case if we test too much
//and the piled up sent emails in sent box might confuse the business team. 
//Can change to yoloshadow official email later

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

//leave for future email template usage
// transporter.use('compile',hbs({
//     viewEngine: {
//         extname: '.handlebars',
//         layoutsDir: './email_templates/',
//         defaultLayout : 'index',
//     },
//     viewPath: './email_templates/'
// }));

//Get all subscribed emails
router.get("/", function(req, res) {
  EmailList.find({}).then(function(emails) {
    res.send(emails);
  });
});

//When User Hits Subscribes
router.post("/", function(req, res, next){
  // simple html body of our email 
  let html = `<h2>Welcome to Yolo Shadow</h2>
              <p>Thanks for your interest in following Yolo Shadow. Fostering communities and creating transformative job shadow experiences have always been the core of our values. We are glad that you have decided to take the first step to join this community. What are some of the alternative ways to live your lives? We will keep you updated with our latest job shadow offerings. From the bottom of our hearts, thank you for being pioneers</p>
              <br><p>Sincerely</p><p>The Yolo Shadow Team</p>`;
  
  //email configuration
  var mailOptions = {
  from: "yoloshadower.tech@gmail.com",
  to: req.body.email,
  subject: "Welcome to Yolo Shadow "+req.body.fname,
  html: html
  };
  //only send the notification email if someone has never signed up before
  EmailList.findOne({
                    email:	req.body.email

                  }).then((emailList) => {
                          if(!emailList){
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
