module.exports = function(app){
  var models = require("./models/models.server.js")();
  require("./services/user.service.server.js")(app, models);
};
