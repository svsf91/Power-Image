module.exports = function (app, models) {
  var users = [];

  function createUsers(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);

    models
      .userModel
      .findUserByUsername(user.username)
      .then(
        function (response) {
          if (response) {
            res.sendStatus(400).send(error);
          } else {
            models
              .userModel
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
};
