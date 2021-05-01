const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/user");
var jwtDecode = require("jwt-decode");

router.post(
  "/userInfoFromToken",

  (req, res) => {
    console.log(req.body);
    console.log(jwtDecode(req.body.token).username);
    let userWeWant = User.findOne({
      username: jwtDecode(req.body.token).username,
    }).then((user) => {
      if (user) {
        console.log(user);
        return res.status(200).json({
          user,
        });
      } else {
        errors = "There is no user associated with this email.";
        return res.status(400).json({
          error: errors,
        });
      }
    });
  }
);
// @route   GET user/current
// @desc    Returns current user logging in
// @access  Private
router.get(
  "/current",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    res.json({
      id: req.user.id,
      username: req.user.username,
      email: req.user.email,
    });
  }
);

// @route   DELETE user/delete
// @desc    Deletes user
// @access  Private
router.delete(
  "/delete",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    const id = req.user.id;
    const password = req.body.password;

    bcrypt
      .compare(password, req.user.password)
      .then((isMatch) => {
        if (isMatch) {
          User.findById(id)
            .then((user) =>
              user.remove().then(() =>
                res.json({
                  success: true,
                })
              )
            )
            .catch((err) =>
              res.status(404).json({
                success: false,
              })
            );
        } else {
          errors.password = "Incorrect Password.";
          return res.status(400).json(errors);
        }
      })
      .catch((err) => console.log(err));
  }
);

router.post("/:id", function (req, res, next) {
  //find and update specific application
  User.findByIdAndUpdate(req.params.id, req.body).then(function () {
    //find and send back updated application for display
    User.findOne({ _id: req.params.id }, req.body).then(function (user) {
      console.log(user);
      res.send(user);
    });
  });
});

router.get("/:id", function (req, res) {
  User.findById(req.params.id)
    .then(function (user) {
      res.send(user);
    });
});

module.exports = router;
