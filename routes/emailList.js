const express = require("express");
const router = express.Router();

const Email = require("../models/emailList");

//Get all subscribed emails
router.get("/", function(req, res) {
  Email.find({}).then(function(emails) {
    res.send(emails);
  });
});

router.post("/", function(req, res, next) {
  Email.create(req.body)
    .then(function(email) {
      res.send(email); //send back info to client
    })
    .catch(next);
});

module.exports = router;
