
const mongoose = require('mongoose');
//const host = require('./host');

const experienceSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true,
    },
    lname:{

          type: String,
          required: true,
      },

    durationDays:{
        type: Number,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    profession:{
        type: String,
        required: true,
    },
    price:{//in the form: $112   that is dollar sign followed by number
        type: String,
        required: true
    },
    image:{
      type: String,
      required: true
    },
    industry:{
      type: String,
      required: true
    },
    availableFrom:{
        type: Date,
        required: true,
    },
    availableTill:{
      type: Date,
      required: true,
    },
    whatICanOffer:{
      type: Array,
      required: false,
      default: []
    },
    perks:{
      type: Array,
      required: false,
      default: []
    },
    reviews:{
      type: Array,
      required: false,
      default: []
    }


});

module.exports = mongoose.model("Experience", experienceSchema);
