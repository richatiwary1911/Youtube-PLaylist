const Comment = require('../models/comments.model');

exports.comment = (req,res,next) => {
    const comment = new Comment({
        name: req.body.name,
        comment: req.body.comment,
        date: req.body.date
    });

    comment.save((err,result) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
          }
          res.send({ message: "Thanks for your comment!" });
    })

}
