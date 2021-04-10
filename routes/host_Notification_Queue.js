const express = require('express');
const router = express.Router();
const host_Notification_Queue = require('../models/host_Notification_Queue');

//Get all host_Notification_Queues
router.get('/', function (req, res) {
  host_Notification_Queue.find()
  .then(function (host_Notification_Queue) {
    res.send(host_Notification_Queue);
  });
});

//Retrive host_Notification_Queue by Id
router.get('/:id', function (req, res, next) {

  host_Notification_Queue.findById({_id: req.params.id})
  .then(function (host_Notification_Queue){
    res.send(host_Notification_Queue);
  });
});

//Retrive host_Notification_Queues by host id
router.get('/host/:id', function (req, res, next) {
  //  host_Notification_Queue.exists({host: req.params.id}, function(err, host_Notification_Queue) {
  //   if (err) {
  //     console.log("not created");
  //     res.send({});
  //   } else {
  //     console.log("created");
  //     res.send(host_Notification_Queue);
  //   }
  // });
  host_Notification_Queue.find({host: req.params.id})
  .then(function (host_Notification_Queue) {

    res.send(host_Notification_Queue);
  
  });
});

//Create and save new host_Notification_Queue instance
router.post('/', function (req, res, next) {
  host_Notification_Queue.create(req.body)
    .then(function (host_Notification_Queue) {
      res.send(host_Notification_Queue); //send back info to client
    })
    .catch(next);
});

//Edit host_Notification_Queue
router.put('/:id', function (req, res, next) {
  //find and update specific application
  host_Notification_Queue.findByIdAndUpdate({_id: req.params.id}, req.body).then(function () {
    //find and send back updated application for display
    host_Notification_Queue.findById({_id: req.params.id}).then(function (host_Notification_Queue) {
      res.send(host_Notification_Queue);
    });
  });
});

//Delete host_Notification_Queue
router.delete('/:id', function (req, res, next) {
  host_Notification_Queue.findByIdAndRemove({_id: req.params.id}).then(function (host_Notification_Queue) {
    res.send(host_Notification_Queue);
  });
});

module.exports = router;
