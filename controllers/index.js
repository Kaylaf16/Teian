const express = require('express');
const router = express.Router();

router.use('/testroutes',require('./testroute.js'))

module.exports=router;
