const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  street: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('location', locationSchema);
