const mongoose = require('mongoose');
const user = require('./user');
const experience = require('./experience');

const reservationSchema = new mongoose.Schema({
  user: {
    //userID reference
    //disabled while APIUser is not working
    type: mongoose.Schema.Types.ObjectId,
    ref: user,
    //required: true,
  },
  experience: {
    //experienceID reference
    type: mongoose.Schema.Types.ObjectId,
    ref: experience,
    required: true,
  },
  availableRanges: {
    type: Array(Date), //array of dates, in pairs [from, to, from,to...]
    required: true,
  },
  aspects: {
    type: Object, // true/false for corresponding aspects selected
    required: true,
  },
  otherAspects: {
    type: String,
    required: true,
  },
  whatMakesGood: {
    type: String,
    required: true,
  },
  accomodations: {
    type: String,
    required: true,
  },
  approval: {
    //reservation approval stage
    //values: pending/approved/rejected
    type: String,
    default: 'pending',
  },
});

module.exports = mongoose.model('Reservation', reservationSchema);
