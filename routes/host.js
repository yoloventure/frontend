const express = require("express");
const router = express.Router();
const Host = require("../models/host");

//Get all host applications
router.get("/", function (req, res) {
  Host.find()
    // .populate('user')
    // .populate('company')
    // .populate('location')
    // .populate('experiences')
    .then(function (hosts) {
      res.send(hosts);
    });
});

//Retrive application by Id
router.get("/:id", function (req, res, next) {
  Host.findById(req.params.id)
    // .populate('user')
    // .populate('company')
    // .populate('location')
    // .populate('experiences')
    .then(function (host) {
      res.send(host);
    });
});

//create and save new host application instance
router.post("/", function (req, res, next) {
  Host.findOne({ user: req.body.user }).then((host) => {
    if (host) {
      let errors = "There is already a host associated with this account.";
      return res.status(400).json({
        success: false,
        error: errors,
        id:host._id
      });
    } else {
      Host.create(req.body)
        .then(function (host) {
          res.send(host); //send back info to client
        })
        .catch(next);
    }
  });
});

//edit application using put requests
router.put("/:id", function (req, res, next) {
  //find and update specific application
  Host.findByIdAndUpdate(req.params.id, req.body).then(function () {
    //find and send back updated application for display
    Host.findOne({ _id: req.params.id }, req.body).then(function (host) {
      console.log(host);
      res.send(host);
    });
  });
});

//delete specific application
router.delete("/:id", function (req, res, next) {
  Host.findByIdAndRemove(req.params.id).then(function (host) {
    res.send(host);
  });
});

// //Post review by HostId
// router.post("/:id", function (req, res, next) {
//   console.log(req.body);
//   Host.create(req.body)
//   .then(function (reviews) {
//   // Host.create({
//   //   company : "5f1b368e5a6d2ce1ebbac9a3",
//   //   title : "exampleHost",
//   //   user : "5ed390d9f49cf627001cb8b4",
//   //   description : "Mark’s photography assignments have taken him to more than 100 countries on six continents. His editorial work has appeared in publications such as Vanity Fair, LIFE, The New York Times, The Washington Post, Time Magazine, GEO, Newsweek, Conde Nast Traveler, National Geographic Traveler, AFAR, Wallpaper, Vogue, Architectural Digest, The Los Angeles Times Magazine, and The London Sunday Times Travel Magazine as well as all the major photography and in-flight magazines. Among his numerous accolades are CLIO, ACE, Aurora Gold, and IPA awards. His books include Faces of the Twentieth Century: Master Photographers and Their Work, The Way of the Japanese Bath, Wanderlust, North Korea, South Korea, Inside Iran and The Travel Photo Essay: Describing A Journey Through Images. He is currently putting the final touches on The People of the Forest, a book about orangutans. After graduating from California State University, Los Angeles with a Master of Arts Degree in Pictorial/Documentary History, Mark Edward Harris started his professional photography career doing the stills for the Merv Griffin Show and various television and movie companies. When the show ended in 1986 he set off on a four- month trek across the Pacific and throughout Southeast Asia, China and Japan. The images created on that trip brought attention to his travel and documentary photography."
//   //   ,review :  "5f14aba6e1d046aa0894f3c3",
//   //   industry : "IT",
//   // }).then(function (reviews) {
//     res.send(reviews);
//   }).catch(next);
// })
// // })


router.post("/:id", function (req, res, next) {
  //find and update specific application
  Host.findByIdAndUpdate(req.params.id, req.body).then(function () {
    //find and send back updated application for display
    Host.findOne({ _id: req.params.id }, req.body).then(function (host) {
      console.log(host);
      res.send(host);
    });
  });
});








module.exports = router;
