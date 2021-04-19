const express = require("express");
const router = express.Router();
const YoloChatAd = require("../models/yoloChatAd");

//Get all chats
router.get("/", function (req, res) {
  YoloChatAd.find()
  .then(function (yoloChatAds) {
    res.send(yoloChatAds);
  });
});

//Retrive Yolo Chat by Id
router.get("/:id", function (req, res, next) {
  YoloChatAd.findById({ _id: req.params.id }).then(function (yoloChatAd) {
    res.send(yoloChatAd);
  });
});

//Create and save new chat instance
router.post("/", function (req, res, next) {
  YoloChatAd.create(req.body)
    .then(function (yoloChatAd) {
      res.send(yoloChatAd); //send back info to client
    })
    .catch(next);
});

//Edit chat
router.put("/:id", function (req, res, next) {
  //find and update specific application
  YoloChatAd.findByIdAndUpdate({ _id: req.params.id }, req.body).then(
    function () {
      //find and send back updated application for display
      chat
        .findOne({ _id: req.params.id }, req.body)
        .then(function (yoloChatAd) {
          res.send(yoloChatAd);
        });
    }
  );
});

//Delete chat
router.delete("/:id", function (req, res, next) {
  YoloChatAd.findByIdAndRemove({ _id: req.params.id }).then(function (
    yoloChatAd
  ) {
    res.send(yoloChatAd);
  });
});

module.exports = router;
