const mongoose = require('mongoose');
//const host = require('./host');

const userSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true,
    },
    lname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    hostId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Host',
        default: null
    },
    job_interest:{
        type: Array,
        required: false,
        default: []
    },
    joinedSince:{
        type: Date,
        required: true,
    },
    username:{
        type: String,
        required: true,
        unique: true,
    },
    icon:{
        type: String,
        default: null
    },
    phone:{
        type: String,
        default: null
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true
    },
    myreviews:{
     type: [{type:mongoose.Schema.Types.ObjectId,
               ref:'reservation'}],
        default:[],
  },

  review: {
    type: Array(mongoose.Schema.Types.ObjectId), // type : array of review id
    deafault: [],
  }
});

module.exports = mongoose.model("User", userSchema);
