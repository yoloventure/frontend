const mongoose = require("mongoose");

const host_Review_Schema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Host",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  body: {
    type: String,
    default: "",
  },
  publishDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Host_Review", host_Review_Schema);
