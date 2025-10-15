const router = require('express').Router();
const Playlist = require('../models/Playlist');
const Song = require('../models/Song');

// Get all playlists
router.get('/', async (req, res) => {
    try {
        const playlists = await Playlist.find().populate('songs');
        res.json(playlists);
    } catch(err) {
        res.status(500).json(err);
    }
});

// Get playlist by ID
router.get('/:id', async (req, res) => {
    try {
        const playlist = await Playlist.findById(req.params.id).populate('songs');
        res.json(playlist);
    } catch(err) {
        res.status(500).json(err);
    }
});

// Create playlist
router.post('/', async (req, res) => {
    try {
        const newPlaylist = new Playlist(req.body);
        await newPlaylist.save();
        res.json(newPlaylist);
    } catch(err) {
        res.status(500).json(err);
    }
});

// Add song to playlist
router.put('/:id/add', async (req, res) => {
    try {
        const playlist = await Playlist.findById(req.params.id);
        playlist.songs.push(req.body.songId);
        await playlist.save();
        res.json(playlist);
    } catch(err) {
        res.status(500).json(err);
    }
});

// Remove song from playlist
router.put('/:id/remove', async (req, res) => {
    try {
        const playlist = await Playlist.findById(req.params.id);
        playlist.songs = playlist.songs.filter(s => s.toString() !== req.body.songId);
        await playlist.save();
        res.json(playlist);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;
