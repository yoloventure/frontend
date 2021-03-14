const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    function (username, password, cb) {
      //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
      return User.findOne({ username, password })
        .then((user) => {
          if (!user) {
            return cb(null, false, { message: "Incorrect email or password." });
          }
          return cb(null, user, { message: "Logged In Successfully" });
        })
        .catch((err) => cb(err));
    }
  )
);

const opts = {};
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET || "your_jwt_secret";

passport.use(
  new JWTStrategy(opts, function (jwtPayload, cb) {
    //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
    return User.findOneById(jwtPayload.id)
      .then((user) => {
        return cb(null, user);
      })
      .catch((err) => {
        return cb(err);
      });
  })
);
