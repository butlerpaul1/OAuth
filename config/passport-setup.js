const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
passport.use(new googleStrategy(
  {
    //options for googleStrategy
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
  }, () => {
    //passport callback function
  })
);
