const express = require('express');
const router = express.Router();
const Company = require('../models/company');

//Get all companies
router.get('/', function (req, res) {
  Company.find()
  .then(function (companies) {
    res.send(companies);
  });
});

//Retrive company by Id
router.get('/:id', function (req, res, next) {
  Company.findById({_id: req.params.id})
  .then(function (company) {
    res.send(company);
  });
});

//Create and save new company instance
router.post('/', function (req, res, next) {
  Company.create(req.body)
    .then(function (company) {
      res.send(company); //send back info to client
    })
    .catch(next);
});

//Edit company
router.put('/:id', function (req, res, next) {
  //find and update specific company
  Company.findByIdAndUpdate({_id: req.params.id}, req.body).then(function () {
    //find and send back updated company for display
    Company.findOne({_id: req.params.id}, req.body).then(function (company) {
      res.send(company);
    });
  });
});

//Delete company
router.delete('/:id', function (req, res, next) {
  Company.findByIdAndRemove({_id: req.params.id}).then(function (company) {
    res.send(company);
  });
});

module.exports = router;
