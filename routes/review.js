const express = require("express");
const router = express.Router();
const ReviewForHost = require("../models/host_Review");
const ReviewForShadower = require("../models/shadowerReview");

//Get all review
router.get("/", function (req, res) {
  ReviewForHost.find()
    .populate("author")
    .populate("host")
    .then(function (reviews) {
      res.send(reviews);
    });
});

//Retrive reservation by HostId
router.get("/host/:id", function (req, res, next) {
  console.log(req.body);
  ReviewForHost.find({ host: req.params.id }).then(function (reviews) {
    res.send(reviews);
  });
});

//Post reservation by HostId
router.post("/host/:id", function (req, res, next) {
  console.log(req.body);
  ReviewForHost.create(req.body)
  .then(function (reviews) {
  // ReviewForHost.create({ host: req.params.id, rating: "4", body: "a si",publishDate: "2018-05-12T04:00:00.000Z", author: "5ef660a01c7b54239095e6c5"}).then(function (reviews) {
    res.send(reviews);
  }).catch(next);
});

//look through all the reviews and if duplicate, don't post
//one host write for only one review for one shadower
//frond end send 

// router.post("/host/:id", function (req, res, next) {
//   ReviewForHost.findOne({ host: req.params.id }).then(
//     ReviewForHost.create(req.body)
//     .then(function (reviews) {
//       res.send(reviews); //send back info to client
//     })
//     .catch(next)
// )});


//Retrive reservation by Shadower's/author's ID
router.get("/shadower/:id", function (req, res, next) {
  ReviewForShadower.find({ shadower: req.params.id }).then(function (reviews) {
    res.send(reviews);
  });
});

//Post reservation by Shadower's Id
router.post("/shadower/:id", function (req, res, next) {
  console.log(req.body);
  ReviewForShadower.create(req.body)
  .then(function (reviews) {
  // Review.create({ host: req.params.id, rating: "4", body: "a si",publishDate: "2018-05-12T04:00:00.000Z", author: "5ef660a01c7b54239095e6c5"}).then(function (reviews) {
    res.send(reviews);
  }).catch(next);
});

module.exports = router;
