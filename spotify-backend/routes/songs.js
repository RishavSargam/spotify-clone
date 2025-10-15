const router = require('express').Router();
const Song = require('../models/Song');

// Get all songs
router.get('/', async (req, res) => {
    try {
        const songs = await Song.find();
        res.json(songs);
    } catch(err) {
        res.status(500).json(err);
    }
});

// Get single song by id
router.get('/:id', async (req, res) => {
    try {
        const song = await Song.findById(req.params.id);
        res.json(song);
    } catch(err) {
        res.status(500).json(err);
    }
});

// Add new song
router.post('/', async (req, res) => {
    try {
        const newSong = new Song(req.body);
        await newSong.save();
        res.json(newSong);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;
