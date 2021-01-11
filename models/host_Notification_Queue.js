const mongoose = require('mongoose');

const host_Notification_Queue_Schema = new mongoose.Schema({

    host:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Host',
      required: true
    },
    shadowRequestNotificationQueue:{
        type: [{type:mongoose.Schema.Types.ObjectId,
               ref:'reviewForHost'}],
        default:[]
    },
    reviewNotificationQueue:{
       type: [{type:mongoose.Schema.Types.ObjectId,
              ref:'reviewForHost'}],
        default:[]
    },


});

module.exports = mongoose.model("Host_Notification_Queue", host_Notification_Queue_Schema);
