const express = require('express');
const router = express.Router();
var db = require('../../../config/config');

router.get('/:id', function(req,res) {
  let animeId = req.params.id

  query = { mal_id: parseInt(animeId) }

  db.get().collection('anime').findOne(query, function(error, result) {
    if(error) console.log(err)
    else{
      res.json(result);
    }
  })
});

module.exports=router;
