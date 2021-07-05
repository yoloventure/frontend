const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
var nodemailer = require("nodemailer");
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
/*
 * This API route is for most basic user authentication only (NO EXTRA DATA)
 */

// @route   POST auth/register
// @desc    Register new user
// @access  Public
router.post("/register", (req, res) => {
  // Check Validation TBD
  var errors;

  // Grab the "Authorization" header.
  var auth = req.get("authorization");

  if (!auth) {
    res.set("WWW-Authenticate", 'Basic realm="Authorization Required"');
    return res.status(401).send("Authorization Required");
  } else {
    var credentials = Buffer.from(auth.split(" ").pop(), "base64")
      .toString("ascii")
      .split(":");
    const userEmail = credentials[0];
    const userPassword = credentials[1];

    User.findOne({
      email: userEmail,
    })
      .then((user) => {
        if (user) {
          errors = "There is already a user associated with this email.";
          return res.status(400).json({
            success: false,
            error: errors,
          });
        } else {
          const newUser = new User({
            username: userEmail,
            fname: req.body.fname,
            lname: req.body.lname,
            job_interest: req.body.job_interest,
            joinedSince: Date.now(),
            email: req.body.email,
            password: userPassword,
          });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then((user) =>
                  res.status(200).json({
                    success: true,
                    message: "User successfully registered",
                  })
                )
                .catch((err) => console.log(err));
            });
          });
        }
      })
      .catch((err) => console.log(err));
  }
});

// @route   POST auth/login
// @desc    Login user / Returns JWT Token
// @access  Public
router.post("/login", (req, res) => {
  var errors;
  const secret = process.env.JWT_SECRET || "secret";

  var auth = req.get("authorization");

  if (!auth) {
    res.set("WWW-Authenticate", 'Basic realm="Authorization Required"');
    return res.status(401).send("Authorization Required");
  } else {
    var credentials = Buffer.from(auth.split(" ").pop(), "base64")
      .toString("ascii")
      .split(":");

    const email = credentials[0];
    const password = credentials[1];
    User.findOne({ email }).then((user) => {
      if (!user) {
        errors = "Password Or Username is incorrect";
        return res.status(401).json({
          success: false,
          error: errors,
        });
      }
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          const payload = {
            id: user._id,
            username: user.username,
          };
          jwt.sign(payload, secret, { expiresIn: 36000 }, (err, token) => {
            if (err)
              res.status(500).json({
                error: "Error signing token",
                raw: err,
              });
            res.json({
              success: true,
              token: `Bearer ${token}`,
            });
          });
        } else {
          errors = "Password Or Username is incorrect";
          res.status(401).json({
            success: false,
            error: errors,
          });
        }
      });
    });
  }
});


//@Route: Forgot Password
router.post("/forgot", (req, res) => {
  var errors;
  const secret = process.env.JWT_SECRET || "secret";

  var auth = req.get("authorization");


  if (!auth) {
    res.set("WWW-Authenticate", 'Basic realm="Authorization Required"');
    return res.status(401).send("Authorization Required");
  } else {
    var credentials = Buffer.from(auth.split(" ").pop(), "base64")
      .toString("ascii")
      .split(":");

    const email = credentials[0];
    User.findOne({ email }).then((user) => {
      if (!user) {
        errors = "There is no user associates to this email";
        return res.status(401).json({
          success: false,
          error: errors,
        });
      } else {
          var mailOptions = {
          from: '1341452029zsr@gmail.com',
          to: user.email,
          subject: 'Reset Yolo Shadow Password',
          text: 'Dear '+user.fname+', Click the link below to reset your password.'+'http://localhost:5000/reset/'+user._id
        };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
              }
            });
      }
    });
  }
});


router.put("/reset/:id", (req, res) => {
  // Check Validation TBD
  console.log("here1");
  var errors;

  // Grab the "Authorization" header.
  var auth = req.get("authorization");

  if (!auth) {
    res.set("WWW-Authenticate", 'Basic realm="Authorization Required"');
    return res.status(401).send("Authorization Required");
  } else {
    console.log("here2");
    console.log(req.params.id);
    var credentials = Buffer.from(auth.split(" ").pop(), "base64")
      .toString("ascii")
      .split(":");
    var userPassword = credentials[0];
    User.findById({ _id: req.params.id })
      .then((user) => {
        if (!user) {
          errors = "Error. Didn't find user.";
          return res.status(400).json({
            success: false,
            error: errors,
          });
        } else {
          // const newUser = new User({
          //   username: userEmail,
          //   fname: req.body.fname,
          //   lname: req.body.lname,
          //   job_interest: req.body.job_interest,
          //   joinedSince: Date.now(),
          //   email: req.body.email,
          //   password: userPassword,
          // });
              console.log("here3");
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(userPassword, salt, (err, hash) => {
              if (err) throw err;
              userPassword = hash;
              User.findByIdAndUpdate( req.params.id, { password: hash },).then(function () {
    //find and send back updated application for display
        console.log("here4");
                // User.findOne({_id: req.params.id}, req.body).then(function (user2) {
                //   res.send(user2);
                // });
          })
                .then((user) =>
                  res.status(200).json({
                    success: true,
                    message: "Password reset successfully",
                  })
                )
                .catch((err) => console.log(err));
            });
          });
        }
      })
      .catch((err) => console.log(err));
  }
});

//@Route: Logout
router.get("/logout", (req, res) => {
  res.send("Logged out");
});

module.exports = router;
