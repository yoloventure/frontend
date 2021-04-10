const express = require("express");
const router = express.Router();
const Review = require("../models/host_Review");

//Get all review
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
  console.log(req.body);
  Review.find({ host: req.params.id }).then(function (reviews) {
    res.send(reviews);
  });
});

//Post reservation by HostId
router.post("/host/:id", function (req, res, next) {
  console.log(req.body);
  Review.create(req.body).then(function (reviews) {
  // Review.create({ host: req.params.id, rating: "4", body: "a si",publishDate: "2018-05-12T04:00:00.000Z", author: "5ef660a01c7b54239095e6c5"}).then(function (reviews) {
    res.send(reviews);
  }).catch(next);
});


router.post("/host/:id", function (req, res, next) {
  Review.findOne({ host: req.params.id }).then(
    Review.create(req.body)
    .then(function (reviews) {
      res.send(reviews); //send back info to client
    })
    .catch(next)
)});


//Retrive reservation by Shadower's/author's ID
router.get("/shadower/:id", function (req, res, next) {
  Review.find({ author: req.params.id }).then(function (reviews) {
    res.send(reviews);
  });
});


module.exports = router;
