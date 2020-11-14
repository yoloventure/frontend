const express = require('express');
const router = express.Router();
const Chat = require('../models/chat');

//Get all chats
router.get('/', function (req, res) {
  Chat.find()
  
  .then(function (chats) {
    res.send(chats);
  });
});

//Retrive Yolo Chat by Id
router.get('/:id', function (req, res, next) {
  Chat.findById({_id: req.params.id})
  .then(function (chat) {
    res.send(chat);
  });
});

//Create and save new chat instance
router.post('/', function (req, res, next) {
  Chat.create(req.body)
    .then(function (chat) {
      res.send(chat); //send back info to client
    })
    .catch(next);
});

//Edit chat
router.put('/:id', function (req, res, next) {
  //find and update specific application
  Chat.findByIdAndUpdate({_id: req.params.id}, req.body).then(function () {
    //find and send back updated application for display
    chat.findOne({_id: req.params.id}, req.body).then(function (chat) {
      res.send(chat);
    });
  });
});

//Delete chat
router.delete('/:id', function (req, res, next) {
  Chat.findByIdAndRemove({_id: req.params.id}).then(function (chat) {
    res.send(chat);
  });
});

module.exports = router;
