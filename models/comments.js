const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    comment: {
        type: String,
        required: true
    },

    // date: {
    //     type: date
    // }
});

const comment = mongoose.model('Comments',commentSchema);

module.exports = comment;