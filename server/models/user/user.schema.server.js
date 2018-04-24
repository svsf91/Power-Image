const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  dateCreated: {
    type: Date,
    default: Date.now
  },
  dateLastLogin: {
    type: Date,
    default: Date.now
  },
  loginCount: {
    type: Number,
    default: 0
  },
  is_admin: Boolean,
  facebook: {
    id: String,
    token: String
  },
  google: {
    id: String,
    token: String
  }
}, {collection: 'user', usePushEach: true});

module.exports = mongoose.model('User', userSchema);
