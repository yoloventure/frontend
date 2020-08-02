const express = require('express');
const router = express.Router();
const Review = require('../models/review');

//Get all experiences
router.get('/', function (req, res) {
  Review.find()
  .populate('author')
  .populate('host')
  .then(function (reviews) {
    res.send(reviews);
  });
});



module.exports = router;
