const User = require('../models/userModel');

function getUsers(req, res) {
  User.findAll({
    order: '"username" DESC',
  }).then(questions => res.send(questions));
}

function addUser(req, res) {
  User.create({
    username: req.body.username,
    password: req.body.password,
  })
  .then(() => res.send('User added'))
  .catch(err => res.send(err));
}

module.exports = { getUsers, addUser };
