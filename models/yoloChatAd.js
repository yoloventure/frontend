const mongoose = require("mongoose");

const yoloChatAdSchema = new mongoose.Schema({
  //change speaker to speaker name
  speaker: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("YoloChatAd", yoloChatAdSchema);
