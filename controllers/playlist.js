const { google } = require('googleapis');
const getYotubePlaylistId = require('get-youtube-playlist-id')
require('dotenv').config();

//playlist details
exports.data = (req,res,next) => {
    const url = req.body.url;
    const id = getYotubePlaylistId(url);

    google.youtube('v3').playlistItems.list({
        key: process.env.API_KEY,
        part: 'snippet, id',
        playlistId: id,
    }, (err, results) => {
        console.log(err ? err.message : results.data);
        res.json(results.data);
        // results.data.items.forEach((item) => {
        //     console.log(item.snippet);
        //     res.json(item.snippet);            
        // })
      });
} 

//video downloader
// (req, res) => {
//     var url = req.query.url;    
//     res.header("Content-Disposition", 'attachment;\  filename="Video.mp4');    
//     ytdl(url, {format: 'mp4'}).pipe(res);
// }


