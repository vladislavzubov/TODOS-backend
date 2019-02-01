const User = require('../models/user.model');

exports.userCreate = (req, res) => {
  let user = new User(
    {
      username: req.body.username,
      password: req.body.password
    }
  );
  user.save( err => {
    if (err) return next(err);
    res.send("succeed")
  });
};
exports.getUser = (req, res) => {
  User.findOne({username: req.param.username, password: req.param.password}, (err) => {
    if (err) return next(err);
    res.send(true);
  })
};