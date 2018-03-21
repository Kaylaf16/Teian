
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
var controllers = require('./controllers');
app.use(controllers);
app.listen(process.env.PORT || 8000,function() {
  console.log("Server Running....");
});
