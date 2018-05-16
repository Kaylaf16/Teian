const express = require('express');
const router = express.Router();


router.use('/Genre',require('./Genre.js'))
router.use('/Title',require('./Title.js'))
router.use('/Studio',require('./Studio.js'))


router.use('/api/v1/anime',require('./api/v1/anime.js'))
router.use('/api/v1/search',require('./api/v1/search.js'))
module.exports=router;
