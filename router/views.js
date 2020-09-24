const router = require('express').Router();
const playlist = require('../controllers/playlist');
const comments = require('../controllers/comment');

// * Home Page Route
// router.get('', (req, res, next) => {
//     res.send('home');
//   });

router.post('', playlist.data);
router.post('/comment', comments.comment);

module.exports = router;