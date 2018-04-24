let connectionString = null;
const dbuser = process.env.DB_USER;
const dbpass = process.env.DB_PASS;
const dburl = process.env.MONGODB_URI;

if (process.env.MONGODB_URI) {
  connectionString = 'mongodb://' + dbuser + ':' + dbpass + '@' + dburl;
}
else {
  connectionString = 'mongodb://localhost:27017/powerImage'
}

const mongoose = require('mongoose');
mongoose.connect(connectionString);
mongoose.Promise = require('q').Promise;

// var userModel = require("./user/user.model.server.js")(mongoose);
// var imageMethod = require('./image/image.model.server.js');
//
// var models = {
//   'userModel': userModel,
//   'imageMethod': imageMethod
// };
