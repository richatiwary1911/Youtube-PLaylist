const { google } = require('googleapis');
const getYotubePlaylistId = require('get-youtube-playlist-id');
const ytdl = require('ytdl-core');
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

// Single Video Downloader
exports.singleVideoDownloader = (req, res, next) => {
    var URL = req.body.url;
 
var stream = ytdl(URL);
stream.on('info', (info) => {
res.header('Content-Disposition', `attachment; filename=${info.videoDetails.title}.mp4`);
ytdl(URL, {
    format: 'mp4'
    
    }).pipe(res);
})}


