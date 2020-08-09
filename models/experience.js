const mongoose = require('mongoose');
//const host = require('./host');

const experienceSchema = new mongoose.Schema({
    host:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Host',
        required: true,
    },
    durationDays:{
        type: Number,
        required: true,
    },
    price:{//in the form: $112   that is dollar sign followed by number
        type: String,
        required: true
    },
    image:{
      type: Array(String),// list of image ids
      required: true
    },
    availabeRanges:{
        type: Array(Date), //array of dates, in pairs [from, to, from,to...]
        required: true,
    },
    whatICanOffer:{
      type: Array,
      default: []
    },
    perks:{
      type: Array(String),
      default: []
    },
    quote:{
      type: String,
      required:false
    },
    reviews:{
      type: Array,//array of ids , reviews will have separrate schema
      default: []
    }


});

module.exports = mongoose.model("Experience", experienceSchema);
