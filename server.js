const express = require('express');
const app = express();

var passport = require('passport');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = require("./server/app.js")(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/dist'));

app.use(function(req, res) {
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
