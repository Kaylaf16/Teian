const express = require('express');
const router = express.Router();


router.use('/GetByGenre',require('./GetByGenre.js'))
router.use('/animes', require('./animes.js'))
module.exports=router;
