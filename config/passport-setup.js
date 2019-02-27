const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');

passsport.use(new googleStrategy(
  {
    //options for googleStrategy

  } () => {
    //passport callback function
  })
);
