const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = Promise;
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
require('./config/passport');
const User = require('./models/user');
const Experience=require('./models/experience')
const Host=require('./models/host')
const Company=require('./models/company')
const Location=require('./models/location')
const passport = require('passport');

// API Endpoints
const user = require('./routes/user');
const email = require('./routes/email');
const auth = require('./routes/auth');
const host = require('./routes/host');
const experience=require('./routes/experience')
const addressValidator=require('./routes/addressValidator');

const app = express();
app.disable('x-powered-by'); //Hide Powered-By

var multer = require('multer')
var cors = require('cors');

//dotenv vonfig
dotenv.config({
  path: './.env',
});

// BodyParser Middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());



// DB Config
const db = process.env.MONGODB_URI || 'mongodb+srv://yolo-dev:RLTwlEzBUNsKWcbB@yolo-cluster-oru1g.gcp.mongodb.net/test?retryWrites=true&w=majority';

//Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('Connected to database...'))
  .catch((err) => console.log(err));


// const host1=new Host({
//   user:  "5ed390d9f49cf627001cb8b4",
//   gender: "Male"  ,
//   phone:   12343,
//   title: 'exampleHost'  ,
//   description:     'i am an example host',
//   company:"5f14ab6b0bd9a615a218238f"
//     })
//     host1.save()



// const location1=new Location({
//   city:'example',
//   country:'USA',
//   zip:'1234'
// })
// location1.save()
// const company1=new Company({
//   name:'example company',
//   location:'5f14ab3059bfc1f635d2b0d2'
// })
// company1.save()




// Passport Middleware
app.use(passport.initialize());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/dist')));

// Use API Routes
app.use('/api/user', user);
app.use('/api/experience', experience);
app.use('/api/email', email);
app.use('/api/auth', auth);
app.use('/api/host', host);
app.use('/api/addressValidator', addressValidator);

// Error handling middleware
app.use(function (err, req, res, next) {
  console.log(err);
  res.status(422).send({error: err.message});
});

// File upload
// Todo: customize destination based on hostId
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
});
var upload = multer({ storage: storage }).single('file');
app.post('/api/file/upload', cors(), function(req, res) {

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }
    return res.status(200).send(req.file)

  });

});
// End file upload

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

// Defining our port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
