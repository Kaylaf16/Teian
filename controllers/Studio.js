const express = require('express');
const router = express.Router();
var db = require('../config/config');

router.get('/', function(req, res) {
  var studio = req.query.studio.split(','); // splitting genre
  allQuery = []; // conjunction of all queries and aggregating them as an inclusive "AND" statement
  studio.forEach(function(x) { // creating query based upon multiple arrays containing genre using elemMatch
    query = {
      studio: {
        $elemMatch: {
          name: x
        }
      }
    }
    allQuery.push(query)
  })
  query = {
    "title": {
      $ne: req.query.title
    }
  }
  db.get().collection('anime').find({
    query,
    $and: allQuery
  }).toArray(function(error, result) {
    if (error) console.log(error)
    else {
      res.redirect('/anime');
    }
  })
});
module.exports = router;
