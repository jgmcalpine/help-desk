const Models = require('../models');

function getResponses(req, res) {
  Models.Responses.findAll({
    order: '"createdAt" ASC',
  }).then(responses => res.send(responses));
}

function addResponse(req, res) {
  console.log('I am adding a response', req.body);
  Models.Responses.create({
    questionId: req.body.questionId,
    response: req.body.response,
    userId: req.body.userId,
  })
  .then(() => res.send('Response added'))
  .catch(err => res.send(err));
}

module.exports = { getResponses, addResponse };
