const { google } = require('googleapis');
const getYotubePlaylistId = require('get-youtube-playlist-id')
require('dotenv').config();

//* Playlist Details
exports.getPlaylistDetails = (req,res,next) => {
    const url = req.body.url;
    const id = getYotubePlaylistId(url);

    google.youtube('v3').playlistItems.list({
        key: process.env.API_KEY,
        part: 'snippet, id',
        playlistId: id,
    }, (err, results) => {
        res.json({responseItem: results.data });
      });


      
} 

//* Video Downloader
exports.videoDownloader=(req,res,next) => {
    var url = req.query.url;    
    res.header("Content-Disposition", 'attachment;\  filename="Video.mp4');    
    ytdl(url, {format: 'mp4'}).pipe(res);
}


