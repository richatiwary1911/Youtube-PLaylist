const { google } = require('googleapis');
require('dotenv').config();

//playlist details
exports.data = (req,res,next) => {
    google.youtube('v3').playlistItems.list({
        key: process.env.API_KEY,
        part: 'snippet, id',
        playlistId: 'PL9ooVrP1hQOFdr0JzdVdi8PRRit63t0ry',
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


