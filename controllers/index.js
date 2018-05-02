const express = require('express');
const router = express.Router();

router.use('/GetAll',require('./GetAll.js'))
router.use('/GetByGenre',require('./GetByGenre.js'))
router.use('/GetByTitle',require('./GetByTitle.js'))
router.use('/GetByStudio',require('./GetByStudio.js'))
module.exports=router;
