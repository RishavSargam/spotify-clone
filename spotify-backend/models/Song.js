const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: String,
    artist: String,
    album: String,
    coverUrl: String,
    audioUrl: String,
    duration: Number
});

module.exports = mongoose.model('Song', songSchema);
