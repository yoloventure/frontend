const mongoose = require('mongoose');

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
        type: String,
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
    },
    phone:{
        type: String,
        unique: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("User", userSchema);
