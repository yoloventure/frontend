const mongoose = require("mongoose");

const reviewForShadowerSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Host",
    required: true,
  },
  shadower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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

module.exports = mongoose.model("ReviewForShadower", reviewForShadowerSchema);
