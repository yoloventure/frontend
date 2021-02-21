const express = require("express");
const router = express.Router();
const Review = require("../models/host_Review");

//Get all experiences
router.get("/", function (req, res) {
  Review.find()
    .populate("author")
    .populate("host")
    .then(function (reviews) {
      res.send(reviews);
    });
});

//Retrive reservation by HostId
router.get("/host/:id", function (req, res, next) {
  Review.find({ host: req.params.id }).then(function (reviews) {
    res.send(reviews);
  });
});

//Retrive reservation by Shadower's/author's ID
router.get("/shadower/:id", function (req, res, next) {
  Review.find({ author: req.params.id }).then(function (reviews) {
    res.send(reviews);
  });
});

module.exports = router;
