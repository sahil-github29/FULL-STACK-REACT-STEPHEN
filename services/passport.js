const passport = require("passport");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

const User = mongoose.model("users");

//Saving data to cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});

/* getting user id from the cookie and check in the DB and return it if found
by calling done() */
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      access_type: "offline",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // we already have a record with this profile ID
        done(null, existingUser);
      } else {
        // we don't have a user record with this profile ID, make a new record!
        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
      }
      console.log("accessToken : ", accessToken);
      console.log("refreshToken : ,", refreshToken);
      console.log("profile :, ", profile);
    }
  )
);
