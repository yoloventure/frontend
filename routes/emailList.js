const express = require("express");
const router = express.Router();

const EmailList = require("../models/emailList");

//Get all subscribed emails
router.get("/", function (req, res) {
  EmailList.find({}).then(function (emails) {
    res.send(emails);
  });
});

router.post("/", function (req, res, next) {
  EmailList.findOne({
    email: req.body.email,
  }).then((emailList) => {
    if (emailList) {
      return res.status(409).json({
        success: false,
      });
    } else {
      EmailList.create(req.body)
        .then(function (element) {
          res.send(element); //send back info to client
        })
        .catch(next);
    }
  });
});

module.exports = router;
