var express = require('express');
var app = express();
var passport = require('passport');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());


app.get('/success', function(req, res) {
  res.send("Hey, hello from the server!");
})

app.get('/login', function(req, res) {
  res.sendFile(__dirname + '/public/login.html');
});


app.listen(8000, function() {
  console.log("Ready for some authentication action");
})