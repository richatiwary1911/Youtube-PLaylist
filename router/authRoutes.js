const router = require('express').Router();

const verifySignUp = require('../controllers/auth/validator');
const auth = require('../controllers/auth/manualLogin');

  //Manual AUTH

  //SignUp Route
  router.post('/signup', verifySignUp.checkDuplication, auth.signup);

  //Login Route
  router.post('/signin', auth.signin);

  module.exports = router;