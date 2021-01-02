const mongoose = require('mongoose');
const company = require('./company');
const user = require('./user');

const hostSchema = new mongoose.Schema({
  user: {
    //userID reference
    type: mongoose.Schema.Types.ObjectId,
    ref: user,
    required: true,
  },
  //--------------------------page-1----------------------------
  yearsExp: {
    type: Number,
    default: null,
  },
  workingImage: {
    type: String,
    default: null,
  },
  otherAspects: {
    type: String,
    default: null,
  },
 idImage: {
    type: String,
    default: null,
  },
  gender: {
    type: String,
    default: null,
  },
  phone: {
    type: Number,
    required: false,
    default: null,
  },
  title: {
    //job title
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  company: {
    //company has both company name and website
    type: mongoose.Schema.Types.ObjectId,
    ref: company,
    required: true,
  },
  description: {
    //one line to describe what they do
    type: String,
    default: null,
    required: true,
  },
  //----------------page-3------------------------------------
  // location: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: location,
  //   default: null,
  // },
  //----------------page-4------------------------------------
  offering: {
    //what they can offer - String array
    type: Array(String),
    default: null,
    required: true,
  },
  // moreOffering: {
  //   //other aspects of what they can offer
  //   type: Array(String),
  //   default: null,
  //   required: false,
  // },
  //----------------page-4------------------------------------
  expertise: {
    type: Array(String),
    default: null,
    required: true,
  },
  experiences: {
    type: Array(mongoose.Schema.Types.ObjectId),
    default: [],
    required: true,
  },
  approval: {
    //host application approval stage
    //values: pending/approved/rejected
    type: String,
    default: 'pending',
    required: true,
  },

  availability: {
    type: Array(Date),
    default: null,
  },
});

module.exports = mongoose.model('Host', hostSchema);
