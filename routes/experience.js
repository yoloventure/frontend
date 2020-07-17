const express = require('express');
const router = express.Router();
const Experience = require('../models/experience');


router.get('/',
  (req,res)=>{

      Experience.find().lean().exec(function (err, users) {
        return res.json(users);
      });
  }





)


module.exports = router;
