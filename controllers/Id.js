const express = require('express');
const router = express.Router();
var db = require('../config/config');

router.get('/',function(req,res){
  console.log(req.query.id);
  query = {mal_id:parseInt(req.query.id)}
  db.get().collection('anime').find(query).toArray(function(error,result){
    if(error) console.log(err)
    else{
      res.json({result});
    }
  })
});

module.exports=router;
