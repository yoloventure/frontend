const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    host:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Host',
      required: true
    },
    rating:{
        type: Number,
        required:true
    },
    body:{
        type: String,
        default: "",
    },
    publishDate:{//in the form: $112   that is dollar sign followed by number
        type: Date,
        required: true
    },


});

module.exports = mongoose.model("Review", reviewSchema);