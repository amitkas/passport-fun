var express = require('express');
var app = express();
var passport = require('passport');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

app.listen(8000, function() {
  console.log("Ready for some authentication action");
})