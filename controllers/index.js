const express = require('express');
const router = express.Router();

router.use('/GetAll',require('./GetAll.js'))
router.use('/Genre',require('./Genre.js'))
router.use('/Title',require('./Title.js'))
router.use('/Studio',require('./Studio.js'))

module.exports=router;
