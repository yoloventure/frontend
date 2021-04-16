const mongoose = require("mongoose");
//const host = require('./host');
//schema for experience advertisements/info pages
const experienceSchema = new mongoose.Schema({
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Host",
    required: true,
  },
  durationDays: {
    type: Number,
  },
  durationHours: {
    type: Number,
  },
  price: {
    
    type: Number,
  },
  remote:{
    type:Boolean
  },
  image: {
    type: Array(String), // list of image ids
  },
  availableRanges: {
    type: Array(Date), //array of dates, in pairs [from, to, from,to...]
  },
  
  perks: {
    type: Array(String),
    default: [],
  },
  reviews: {
    type: Array(mongoose.Schema.Types.ObjectId), //array of ids , reviews will have separrate schema
    default: [],
  },
});

module.exports = mongoose.model("Experience", experienceSchema);
