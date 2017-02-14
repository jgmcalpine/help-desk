const Models = require('../models');

function getMessages(req, res) {
  Models.Messages.findAll({
    order: '"createdAt" ASC',
  }).then(messages => res.send(messages));
}

function addMessage(req, res) {
  Models.Messages.create({
    questionid: req.body.questionid,
    username: req.body.username,
    message: req.body.message,
  })
  .then(() => res.send('Message added'))
  .catch(err => res.send(err));
}

module.exports = { getMessages, addMessage };
