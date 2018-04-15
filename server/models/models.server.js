module.exports = function() {
    var connectionString =  null;
    var dbuser = process.env.DB_USER;
    var dbpass = process.env.DB_PASS;
    var dburl = process.env.MONGODB_URI;

    if (process.env.MONGODB_URI) {
        connectionString = 'mongodb://' + dbuser + ':' + dbpass + '@' + dburl;
    }
    else {
      connectionString = 'mongodb://localhost:27017/powerImage'
        // connectionString = 'mongodb://localhost:27017/test';
    }

    var mongoose = require('mongoose');
    mongoose.connect(connectionString);
    mongoose.Promise = require('q').Promise;

    var userModel = require("./user/user.model.server.js")(mongoose);

    var models = {
        'userModel' : userModel
    };

    return models;

};
