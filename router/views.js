const router = require('express').Router();
const playlist = require('../controllers/auth/playlist');

// * Home Page Route
// router.get('', (req, res, next) => {
//     res.send('home');
//   });

router.get('', playlist.data);

module.exports = router;