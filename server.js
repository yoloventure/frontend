const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = Promise;
const bodyParser = require('body-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('./models/user');

// API Endpoints
const user = require('./routes/user');
const email = require('./routes/email');

const app = express();

//dotenv vonfig
dotenv.config({
    path: './.env'
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

// Passport Middleware
app.use(passport.initialize());


//JWT setUp

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET || 'secret';

passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.sub }, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

// //session middleware
const sessionMiddleWare = session({
    secret: process.env.SESSION_SECRET || 'secret',
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: true,
    saveUninitialized: true,
    unset: 'destroy',
    cookie: {
        httpOnly: false,
        maxAge: 1000 * 3600 * 24,
        secure: false, // this need to be false if https is not used. Otherwise, cookie will not be sent.
    }
})

app.use(sessionMiddleWare);

app.use(express.static(path.join(__dirname, 'client/dist')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist'))
})


//@Route: Logout
app.get('/api/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }
        res.send(req.session);
    });
});


// Use API Routes
app.use('/api/user', user);
app.use('/api/email', email);

// Defining our port
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
