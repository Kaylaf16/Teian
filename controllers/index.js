const express = require('express');
const router = express.Router();

router.use('/animesearch',require('./animesearch.js'))

module.exports=router;
