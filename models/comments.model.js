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

    date: {
        type: Date,
        default: Date.now()
    }
});

const comment = mongoose.model('Comments',commentSchema);

module.exports = comment;
