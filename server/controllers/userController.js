const Models = require('../models');
const bcrypt = require('bcryptjs');

function getUsers(req, res) {
  Models.Users.findAll({
    order: '"username" DESC',
  }).then(questions => res.send(questions));
}

function addUser(req, res) {
  console.log('in add user', req.body);
  // need error for if user already exists
  if (req.body.username && req.body.password && req.body.profile) {
    Models.Users.create({
      username: req.body.username,
      password: req.body.password,
      profile: req.body.profile,
    });
    res.cookie('user', req.body.username); // need to make this more secure
    res.json({ status: 'success', username: req.body.username }); // need to add sessions
  }
}

function verifyUser(req, res) {
  Models.Users.findOne({ where: { username: req.body.username } }).then((result) => {
    if (result !== null && bcrypt.compareSync(req.body.password, result.password)) {
      // res.cookie('user', req.body.username); // add sessions
      res.json({
        id: result.id,
        username: req.body.username,
       });
    } else {
      res.redirect('/login');
    }
  });
}

module.exports = { addUser, verifyUser, getUsers };
