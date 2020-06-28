const express = require('express');
const router = express.Router();
const Host = require('../models/host');

//Get all host applications
router.get('/', function (req, res) {
  Host.find({}).then(function (hosts) {
    res.send(hosts);
  });
});

//Retrive application by Id
router.get('/:id', function (req, res, next) {
  Host.findById({_id: req.params.id}).then(function (host) {
    res.send(host);
  });
});

//create and save new host application instance
router.post('/', function (req, res, next) {
  Host.create(req.body)
    .then(function (host) {
      res.send(host); //send back info to client
    })
    .catch(next);
});

//edit application using put requests
router.put('/:id', function (req, res, next) {
  //find and update specific application
  Host.findByIdAndUpdate({_id: req.params.id}, req.body).then(function () {
    //find and send back updated application for display
    Host.findOne({_id: req.params.id}, req.body).then(function (host) {
      res.send(host);
    });
  });
});

//delete specific application
router.delete('/:id', function (req, res, next) {
  Host.findByIdAndRemove({_id: req.params.id}).then(function (host) {
    res.send(host);
  });
});

module.exports = router;