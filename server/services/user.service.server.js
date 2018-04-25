var express = require('express');
var router = express.Router();
var passport = require('passport');
var bodyParser = require('body-parser');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var bcrypt = require('bcrypt-nodejs');
var userMethod = require('../models/user/user.model.server.js');


//LocalStrategy
passport.use('LocalStrategy', new LocalStrategy(localStrategy));
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);


// GET Calls.
router.get('/user', findUserAllUser);

router.get('/user/:uid', findUserById);

// POST Calls.
router.post('/user', createUsers);

// PUT Calls.
router.put('/user/:uid', updateUser);

// DELETE Calls.
router.delete('/user/:uid', deleteUser);



//Local
router.post('/login', passport.authenticate('LocalStrategy'), login);
router.get('/checkLoggedIn', checkLoggedIn);
router.post('/register', register);
router.get('/logout', logout);

//Facebook
router.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}));
router.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/user',
  failureRedirect: '/login'
}));

//Google
router.get('/auth/google', passport.authenticate('google', {scope: 'profile'}));
router.get('/auth/google/callback',
  passport.authenticate('google', {failureRedirect: '/login'}),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/user');
  });




function localStrategy(username, password, done) {
  userMethod
  // .findUserByCredentials(username, password)
    .findUserByUsername(username)
    .then(
      function (user) {
        // if(user.username === username && user.password === password) {
        if (user && bcrypt.compareSync(password, user.password)) {
          return done(null, user);
        }
        else {
          return done(null, false);
        }
      },
      function (err) {
        if (err) {
          return done(err);
        }
      }
    );
}


//FacebookStrategy
var facebookConfig = {
  clientID: process.env.FACEBOOK_CLIENT_ID || '559131524442517',
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '596a598cee336efa6908cbac1bb4b75e',

  //Use for heroku:
  callbackURL: process.env.FACEBOOK_CALLBACK_URL || 'http://localhost:3000/auth/facebook/callback'
};
passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

function facebookStrategy(token, refreshToken, profile, done) {
  userMethod
    .findUserByFacebookId(profile.id)
    .then(
      function (user) {
        if (user) {
          return done(null, user);
        } else {
          var newFacebookUser = {
            username: profile.displayName,
            password: "password",
            facebook: {
              id: profile.id,
              token: token
            }
          };
          return userMethod
            .createUser(newFacebookUser);
        }
      },
      function (err) {
        if (err) {
          return done(err);
        }
      }
    )
    .then(
      function (user) {
        return done(null, user);
      },
      function (err) {
        if (err) {
          return done(err);
        }
      }
    );
}

// GoogleStrategy
var googleConfig = {
  clientID: process.env.GOOGLE_CLIENT_ID || '109169742644-0tbpcbabvq3t380bjqtpdrr7gkhf9al7.apps.googleusercontent.com',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'IPk03_hvBPahQvAQrdvBuwgr',
  //Use for heroku:
  callbackURL: process.env.GOOGLE_CALLBACK_URL || 'http://localhost:3000/auth/google/callback'
};

passport.use(new GoogleStrategy(googleConfig, googleStrategy));

function googleStrategy(token, refreshToken, profile, done) {
  userMethod
    .findUserByGoogleId(profile.id)
    .then(
      function (user) {
        if (user) {
          return done(null, user);
        } else {
          var newGoogleUser = {
            username: "username",
            password: "password",
            google: {
              id: profile.id,
              token: token
            }
          };
          return userMethod
            .createUser(newGoogleUser);
        }
      },
      function (err) {
        if (err) {
          return done(err);
        }
      }
    )
    .then(
      function (user) {
        return done(null, user);
      },
      function (err) {
        if (err) {
          return done(err);
        }
      }
    );
}

/* Google Login Functions End */


function serializeUser(user, done) {
  done(null, user);
}

function deserializeUser(user, done) {
  userMethod
    .findUserById(user._id)
    .then(
      function (user) {
        done(null, user);
      },
      function (err) {
        done(err, null);
      }
    );
}

// function facebookLogin(req, res) {
//     if(req.user) {
//         res.redirect('/assignment/#!/profile');
//     } else {
//         res.sendStatus(404);
//     }
// }

function login(req, res) {
  var user = req.user;
  res.json(user);
}

function checkLoggedIn(req, res) {
  res.send(req.isAuthenticated() ? req.user : undefined);
}

function register(req, res) {
  var user = req.body;
  user.password = bcrypt.hashSync(user.password);
  userMethod
    .createUser(user)
    .then(
      function (user) {
        if (user) {
          req.login(user, function (err) {
            if (err) {
              res.status(400).send(err);
            } else {
              res.json(user);
            }
          });
        }
      }
    );
}

function logout(req, res) {
  req.logout();
  res.send('');
}

//API
function createUsers(req, res) {
  var user = req.body;
  user.password = bcrypt.hashSync(user.password);

  userMethod
    .findUserByUsername(user.username)
    .then(
      function (response) {
        if (response) {
          res.sendStatus(400).send(error);
        } else {
          userMethod
            .createUser(user)
            .then(
              function (newUser) {
                res.json(newUser);
              },
              function (error) {
                res.sendStatus(400).send(error);
              }
            );
        }
      }
    );
}

function findUserAllUser(req, res) {
  var username = req.query.username;
  var password = req.query.password;
  if (username && password) {
    userMethod
      .findUserByCredentials(username, password)
      .then(
        function (user) {
          if (user) {
            res.json(user);
          } else {
            res.send(null);
          }
        },
        function (error) {
          res.sendStatus(400).send(error);
        });

  } else if (username) {
    userMethod
      .findUserByUsername(username)
      .then(
        function (user) {
          if (user) {
            res.json(user);
          } else {
            res.send(null);
          }
        },
        function (error) {
          res.sendStatus(400).send(error);
        });
  } else {
    userMethod
      .findAllUser()
      .then(function(users) {
        if(users) {
          res.json(users);
        } else {
          res.send(null);
        }
      },
        function (error) {
        res.sendstatus(400).send(error);
        });
  }
}

function findUserById(req, res) {
  var uid = req.params.uid;
  userMethod
    .findUserById(uid)
    .then(
      function (user) {
        if (user) {
          res.json(user);
        } else {
          user = null;
          res.send(user);
        }
      },
      function (error) {
        res.sendStatus(400).send(error);
      }
    );
}

function updateUser(req, res) {
  var uid = req.params.uid;
  var new_user = req.body;
  userMethod
    .updateUser(uid, new_user)
    .then(
      function (user) {
        res.json(user);
      },
      function (error) {
        res.sendStatus(400).send(error);
      });
}

function deleteUser(req, res) {
  var uid = req.params.uid;
  userMethod
    .deleteUser(uid)
    .then(
      function (status) {
        res.send('');
      },
      function (error) {
        res.sendStatus(400).send(error);
      }
    );
}

module.exports = router;
