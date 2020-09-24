const router = require('express').Router();
const playlist = require('../controllers/video.controller');
const comments = require('../controllers/comment.controller');



router.post('/playlist', playlist.getPlaylistDetails);
router.post('/comment', comments.comment);

module.exports = router;
