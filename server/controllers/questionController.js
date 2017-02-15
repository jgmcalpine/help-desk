const Models = require('../models');

function getQuestions(req, res) {
	Models.Questions.findAll({
    order: '"createdAt" DESC',
  }).then(questions => res.send(questions));
}

function addQuestion(req, res) {
  Models.Questions.create({
    question: req.body.question,
    userId: req.body.userId,
    questionStatusId: 1,
  })
  .then((data) => res.json(data))
  .catch(err => res.send(err));
}

module.exports = { getQuestions, addQuestion };
