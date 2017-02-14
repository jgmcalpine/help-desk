const Models = require('../models');

function getQuestions(req, res) {
	Models.Questions.findAll({
    order: '"createdAt" DESC',
  }).then(questions => res.send(questions));
}

function addQuestion(req, res) {
  console.log('i am adding a question', req.body);
  Models.Questions.create({
    question: req.body.question,
    userId: req.body.userId,
    questionStatusId: req.body.questionStatusId,
  })
  .then(() => res.send('Question added'))
  .catch(err => res.send(err));
}

module.exports = { getQuestions, addQuestion };
