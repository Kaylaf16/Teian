const express = require('express');
const router = express.Router();
var db = require('../config/config');


router.get('/',function(req,res){
  query = {mal_id:parseInt(req.query.id)}
  db.get().collection('anime').find(query).toArray(function(error,result){
    if(error) console.log(err)
    else{
      res.json(result);
    }
  })
});

router.get('/:id',function(req,res) {
  db.get().collection('anime').find({ mal_id: req.params.id }).toArray(function(error,result){
    if(error) console.log(err)
    else{
      res.json(result);
    }
  })
});

module.exports = router;
