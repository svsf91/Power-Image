const userModel = require('./user.schema.server.js');
// const findOrCreate = require('mongoose-findorcreate');
// userSchema.plugin(findOrCreate);


var api = {
  'createUser': createUser,
  'findUserById': findUserById,
  'findUserByUsername': findUserByUsername,
  'findUserByCredentials': findUserByCredentials,
  'updateUser': updateUser,
  'deleteUser': deleteUser,
  'insertWebsiteToUser': insertWebsiteToUser,
  'findUserByFacebookId': findUserByFacebookId,
  'findUserByGoogleId': findUserByGoogleId
};

function findUserByFacebookId(facebookId) {
  return userModel.findOne({'facebook.id': facebookId});
}

function findUserByGoogleId(googleId) {
  return userModel.findOne({'google.id': googleId});
}

function insertWebsiteToUser(userId, websiteId) {
  userModel
    .findById(userId)
    .then(function (user) {
      user.websites.push(websiteId);
      user.save();
    });
}

function createUser(user) {
  var newUser = {
    username: user.username,
    password: user.password,
    websites: [],
    facebook: user.facebook,
    google: user.google
  };

  if (user.firstName) {
    newUser.firstName = user.firstName;
  }
  if (user.lastName) {
    newUser.lastName = user.lastName;
  }
  if (user.email) {
    newUser.email = user.email;
  }
  if (user.phone) {
    newUser.phone = user.phone;
  }

  return userModel.create(newUser);
}

function findUserById(userId) {
  return userModel.findById(userId);
}

function findUserByUsername(username) {
  return userModel.findOne({username: username})
}


function findUserByCredentials(username, password) {
  userModel.findOne({
    username: username,
    password: password
  }).then(function (user) {
    user.dateLastLogin = Date.now();
    user.loginCount += 1;
    user.save();
    return user;
  });
}

function updateUser(userId, user) {
  return userModel.update({
    _id: userId
  }, {
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  });
}

function deleteUser(userId) {
  return userModel.remove({
    _id: userId
  });
}

module.exports = api;
