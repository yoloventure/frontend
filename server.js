const express = require("express");
const mongoose = require("mongoose");
mongoose.Promise = Promise;
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
require('./config/passport');

const passport = require('passport');

// Models
const User = require('./models/user');
const Experience = require('./models/experience')
const Host = require('./models/host')
const Company = require('./models/company')
const Review = require('./models/review')
const Reservation = require('./models/reservation');
const Chat = require('./models/chat');
// API Endpoints
const user = require('./routes/user');
const email = require('./routes/email');
const emailList = require('./routes/emailList');
const auth = require('./routes/auth');
const host = require('./routes/host');
const experience = require('./routes/experience');
const review = require('./routes/review');
const company = require('./routes/company');
const addressValidator=require('./routes/addressValidator');
const fileUpload = require('./routes/fileUpload');
const reservation = require('./routes/reservation');
 const chat = require('./routes/chat');
const app = express();
app.disable("x-powered-by"); //Hide Powered-By

var multer = require("multer");
var cors = require("cors");

//dotenv vonfig
dotenv.config({
  path: "./.env"
});

// BodyParser Middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db =
  process.env.MONGODB_URI ||
  "mongodb+srv://yolo-dev:RLTwlEzBUNsKWcbB@yolo-cluster-oru1g.gcp.mongodb.net/test?retryWrites=true&w=majority";

//Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("Connected to database..."))
  .catch(err => console.log(err));


//clear Reservation collection
// Reservation.deleteMany({}).then(function(){
//     console.log("Reservations deleted"); // Success
// }).catch(function(error){
//     console.log(error); // Failure
// });

//Insert example reservation
// const reservation1=new Reservation({
//    shadower: "5ed5a01fc8a5c656cc476f80",
//     host: "5f14aba6e1d046aa0894f3c3",
//     otherAspects: "sample otherAspects",
//     whatMakesGood: "sample whatMakesGood",
//     accomodations: "sample accomodations",
//     approval: "pending",
//     availabeRanges: [
//               "2014-01-01T23:28:56.782Z",
//               "2014-01-07T23:28:56.782Z"
//           ],
//     experience: "5f19b09d769f37d6e9f22802",
//     aspects: {
//               "0": "true",
//               "1": "true",
//               "2": "false"
//       },
// })
// reservation1.save();


//Insert Experience object
  // const exp1=new Experience({
  // host: "5f14aba6e1d046aa0894f3c3",
  // durationDays: "20",
  // price: "$102",
  // image: "http://via.placeholder.com/425x425",
  // availableRanges: ["2020-07-22T04:00:00.000+00:00", "2020-07-23T04:00:00.000+00:00"],
  // whatICanOffer: [{
  //       "title": "programming techniques",
  //       "body": "I’ll show you how I pace my speech, use radiograph to explain, and apply other techniques routinely to communicate effectively with my patients."
  //   }, {
  //       "title": "Foundations of Dentist Practice",
  //       "body": "Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas."
  //   }, {
  //       "title": "Tincidunt lobortis feugiat vivamus",
  //       "body": "Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas."
  //   }],
  // perks: ["Coffee shop", "Career Handbook"],
  // quote: "I am Dr. AXSKLAxj Schupak, and I look forward to meeting you if you want to learn more about our practice and the techniques we use to treat patients. We will be discussing your career goals and be your shadowing host for 2 days. But first let me tell you about my practice and how we can help you. I’ve been practicing and teaching orthodontics in Manhattan for over 30 years. During that time, my top priority has been to provide patients with the highest quality orthodontic care in a relaxed and upbeat environment. Dr. Movahedian and I recognize that every patient has different orthodontic requirements. We both listen very carefully to our patients to make sure they will be satisfied with their smile. We utilize the latest and most efficient technological advances, such as high-tech wires from SureSmile®, clear braces, Invisalign®, and the latest computer technology, such as digital imaging and advanced computer graphics, to ensure that our patients receive the most effective care possible.",
  // reviews:[{
  //       "author": "Derek",
  //       "body": "Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.",
  //       "publishDate": "5/12/2018"
  //   }, {
  //       "author": "Derek",
  //       "body": "Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.",
  //       "publishDate": "5/12/2018"
  //   }, {
  //       "author": "Derek",
  //       "body": "Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.",
  //       "publishDate": "5/12/2018"
  //   }, {
  //       "author": "Derek",
  //       "body": "Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.",
  //       "publishDate": "5/12/2018"
  //   }]
  // })
  // exp1.save()

    // const chat1=new Chat({
  //   speaker:"Lorem ipsum",
  //   date:"September 20, 2020",
  //   time:"2PM to 3PM EST",
  //   image: "http://via.placeholder.com/425x425"
  //   link: "www.google.com"
  // })
  //   chat1.save()
  // review1.save()
  // const review1=new Review({
  //   author:'5ef660a01c7b54239095e6c5',
  //   host:'5f14aba6e1d046aa0894f3c3',
  // rating:4,
  //   body:'it was great and ljads faschuksa casguaksh casoafgausf basohdalsc cbascosacnac gafaoshc nncasohcoac nacshcoahc ',
  //   publishDate: "5/12/2018"
  // })
  // review1.save()

// Passport Middleware
app.use(passport.initialize());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/dist")));

app.use(cors());

// Use API Routes
app.use('/api/user', user);
app.use('/api/email', email);
app.use('/api/emailList', emailList);
app.use('/api/auth', auth);
app.use('/api/host', host);
app.use('/api/experience', experience);
app.use('/api/company', company);
app.use('/api/review', review);
app.use('/api/addressValidator', addressValidator);
app.use('/api/fileUpload', fileUpload);
app.use('/api/reservation', reservation);
app.use('/api/chat', chat);
// Error handling middleware
app.use(function(err, req, res, next) {
  console.log(err);
  res.status(422).send({ error: err.message });
});

// File upload
/*
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
var upload = multer({ storage: storage }).single("file");
app.post("/api/file/upload", cors(), function(req, res) {
  upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});
*/

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist/index.html"));
});

// Defining our port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
