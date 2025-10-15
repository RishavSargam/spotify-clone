const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
    name: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }]
});

module.exports = mongoose.model('Playlist', playlistSchema);
