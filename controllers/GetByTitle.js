const express = require('express');
const router = express.Router();
var db = require('../config/config');

router.get('/',function(req,res){ // possibly create a section for search type based on title. Search genre based on title
  query = {title:req.query.title}
  filter = req.query.filter
  db.get().collection('anime').find(query).toArray(function(error,result){
    if(error) console.log(err)
    else{

      if(filter=='genre'){ // checking for filter value
        genreList =[]
        result[0]["genre"].forEach(function(genre){
          genreList.push(genre.name)
        })

        var url ='/GetByGenre?genre='+genreList +'&title='+req.query.title
        res.redirect(url)
      }
      else if(filter == 'studio')
      {
       var studioList = []

       result[0]["studio"].forEach(function(studio){
        studioList.push(studio.name)
        var url ='/GetByStudio?studio='+studioList +'&title='+req.query.title
        res.redirect(url)
      })

      }

    }
  })
});
module.exports=router;
