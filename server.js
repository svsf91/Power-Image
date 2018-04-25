var express = require('express');
var app = express();

var path = require('path');
var bodyParser = require('body-parser');
var passport = require('passport');
var cookieParser = require('cookie-parser');



// CORS // Cross-Origin Resource Sharing
// allows the browser to ask the server whether it is OK for Js to request data from it
app.use( function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

app.use(cookieParser());

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());


// init mongoose
require('./server/models/models.server.js');

// router configuration
app.use('/', require('./server/services/user.service.server.js'));
app.use('/api/image', require('./server/services/image.service.server.js'));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.set('port', (process.env.PORT || 3000));


app.listen(app.get('port'), function() {
  console.log('Power image is running on port', app.get('port'));
});

module.exports = app;
