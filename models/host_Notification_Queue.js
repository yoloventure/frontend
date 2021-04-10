const mongoose = require('mongoose');

const host_Notification_Queue_Schema = new mongoose.Schema({

    host:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Host',
      required: true
    },
    //shaower request  to host
    shadowRequestNotificationQueue:{
        type: [{type:mongoose.Schema.Types.ObjectId,
               ref:'reservation'}],
        default:[]
    },
    //shadower to host
    reviewNotificationQueue:{
       type: [{type:mongoose.Schema.Types.ObjectId,
              ref:'host_Review'}],
        default:[]
    },


});

module.exports = mongoose.model("Host_Notification_Queue", host_Notification_Queue_Schema);
