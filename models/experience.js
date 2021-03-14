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
  price: {
    //in the form: $112   that is dollar sign followed by number
    type: String,
  },
  image: {
    type: Array(String), // list of image ids
  },
  availableRanges: {
    type: Array(Date), //array of dates, in pairs [from, to, from,to...]
  },
  whatICanOffer: {
    type: Array(Object),
    default: [],
  },
  perks: {
    type: Array(String),
    default: [],
  },
  quote: {
    type: String,
  },
  reviews: {
    type: Array(mongoose.Schema.Types.ObjectId), //array of ids , reviews will have separrate schema
    default: [],
  },
});

module.exports = mongoose.model("Experience", experienceSchema);
