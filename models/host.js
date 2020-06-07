const mongoose = require('mongoose');

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
    type: locationSchema,
    required: true,
  },
});

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
});

const hostSchema = new mongoose.Schema({
  //--------------------------page-1----------------------------
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
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
  company: {
    //company has both company name and website
    type: companySchema,
    required: true,
  },
  description: {
    //one line to describe what they do
    type: String,
    default: null,
    required: true,
  },
  //----------------page-3------------------------------------
  location: {
    type: locationSchema,
    default: null,
  },
  //----------------page-4------------------------------------
  offering: {
    //what they can offer - String array
    type: Array(String),
    default: null,
    required: true,
  },
  moreOffering: {
    //other aspects of what they can offer
    type: Array(String),
    default: null,
    required: false,
  },
  //----------------page-4------------------------------------
  expertise: {
    type: Array(String),
    default: null,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Host', hostSchema);
