const mongoose = require('mongoose');
const location = require('./location');

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: false,
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: location,
    required: true,
  },
});

module.exports = mongoose.model('Company', companySchema);
