'use strict';
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var controllers = require('./controllers');
app.use(controllers);

app.listen(process.env.PORT || 8000,function() {
  console.log("Server Running....");
});
