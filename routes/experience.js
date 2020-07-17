const express = require('express');
const router = express.Router();
const Experience = require('../models/experience');

//Get all experiences
router.get('/', function (req, res) {
  Experience.find({}).then(function (experiences) {
    res.send(experiences);
  });
});

//Retrive experience by Id
router.get('/:id', function (req, res, next) {
  Experience.findById({_id: req.params.id}).then(function (experience) {
    res.send(experience);
  });
});

//Create and save new experience instance
router.post('/', function (req, res, next) {
  Experience.create(req.body)
    .then(function (experience) {
      res.send(experience); //send back info to client
    })
    .catch(next);
});

//Edit experience
router.put('/:id', function (req, res, next) {
  //find and update specific application
  Experience.findByIdAndUpdate({_id: req.params.id}, req.body).then(function () {
    //find and send back updated application for display
    Experience.findOne({_id: req.params.id}, req.body).then(function (experience) {
      res.send(experience);
    });
  });
});

//Delete experience
router.delete('/:id', function (req, res, next) {
  Experience.findByIdAndRemove({_id: req.params.id}).then(function (experience) {
    res.send(experience);
  });
});

module.exports = router;
