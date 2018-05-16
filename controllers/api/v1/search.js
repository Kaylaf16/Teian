const express = require('express');
const router = express.Router();
var db = require('../../../config/config');

router.get('/',function(req,res) {
  let queryString = req.query.q
  let limit = req.query.limit || 3
  let query = { "title": { $regex: `^${queryString}` } }

  db.get().collection('anime').find(query).limit(limit).toArray(function(error, result) {
    if(error) console.log(err)
    else{
      res.json(result)
    }
  })
});

module.exports=router;
