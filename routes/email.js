const nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'yoloshadower.tech@gmail.com',
    pass: 'TBD'
  }
});

module.exports = router;
