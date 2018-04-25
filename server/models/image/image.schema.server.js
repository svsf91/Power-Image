const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var imageSchema = new Schema({
  name: String,
  size: String,
  dateCreated: {type: Date, default: Date.now()},
  url: String
});
module.exports = mongoose.model('Image', imageSchema);
