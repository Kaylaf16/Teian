const express = require('express');
const router = express.Router();

router.use('/GetAll',require('./GetAll.js'))
router.use('/GetByGenre',require('./GetByGenre.js'))
router.use('/GetById',require('./GetById.js'))
module.exports=router;
