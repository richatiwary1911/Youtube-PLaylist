const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
    },

    name: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },

    password: {
        type: String,
        require: true
    },

    googleId: {
        type: Number
    }
});

const user = mongoose.model('User', userSchema);

module.exports = user;