const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var MongoClient = require('mongodb').MongoClient;
var db = require('./config/config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
var controllers = require('./controllers');
app.use(controllers);
db.connect('mongodb://dbuser:dbpassword@ds139929.mlab.com:39929/teian',function(err){
  if(err) console.log(err)
  else{
    app.listen(process.env.PORT || 8000,function() {
      console.log("Server Running....");
    });
  }
})
