const Comment = require('../models/comments');

exports.comment = (req,res,next) => {
    const comment = new Comment({
        name: req.body.name,
        comment: req.body.comment,
        //date: new Date()
    });

    comment.save((err,result) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
          }
          res.send({ message: "Thanks for your comment!" });
    })

}