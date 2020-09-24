const router = require('express').Router();
const passport = require('passport');

const verifySignUp = require('../controllers/auth/validator');
const auth = require('../controllers/auth/manualLogin');

  //Manual AUTH

  //SignUp Route
  router.post('/signup', verifySignUp.checkDuplication, auth.signup);

  //Login Route
  router.post('/signin', auth.signin);

  //Google AUTH
  router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }
));

  //callback route for Google to redirect
  router.get('/auth/google/redirect', 
      passport.authenticate( 'google', { 
          successRedirect: '/',
          failureRedirect: '/signin'
  }));

  router.get('/logout',(req,res) => {
    req.logout();
    res.redirect('/');
  });

  module.exports = router;