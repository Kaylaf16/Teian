const express = require('express');
const router = express.Router();
var db = require('../config/config');

router.get('/',function(req,res){
  db.get().collection('anime').find().toArray(function(error,result){
    if(error) console.log(err)
    else{
      res.json(result);
    }
  })
});
module.exports=router;
