const express = require('express');
const app = express();

var passport = require('passport');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = require('./server/router.js');

app.use(bodyParser);
app.use(cookieParser);
app.use(passport);

app.use(express.static(__dirname + '/dist'));
app.use('/api', router);
app.listen(process.env.PORT || 4600);

module.exports = app;
