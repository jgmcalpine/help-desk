const Models = require('../models');
const db = require('../pgConnection');


      // 1: {
      //  id: 1,
      //  question: 'What is the name of the first president of Colombia?',
      //  createdAt: '2017-02-13 21:32:36.698226-08',
      //  updatedAt: '2017-02-13 21:32:36.698226-08',
      //  status: { id: 1, name: 'Opened' },
      //  user: { id: 2, name: 'Flavia' },
      //  responses: [],
      // },

function addQuestion(req, res) {
  Models.Questions.create({
    question: req.body.question,
    userId: req.body.userId,
    questionStatusId: 1,
  })
  .then((data) => res.json(data))
  .catch(err => res.send(err));
}

function getQuestions(req, res) {
  let results = {};
	Models.Questions.findAll({
    order: '"createdAt" DESC',
  }).then(questions => {
    let responsesPromises = [];
    questions.forEach((question) => {
      question = question.dataValues;
      question.responses = [];
      results[question.id] = question;
      responsesPromises.push(
        db.query(`SELECT * FROM responses WHERE "questionId" = ${question.id}`).then((responses) => {
          return responses[0];
        })
      );
    });
    return Promise.all(responsesPromises);
  })
  .then((promResponses) => {
    promResponses.forEach((responses, idx) => {
      if (responses) {
        responses.forEach((response) => {
          results[response.questionId].responses.push(response);
        });
      }
    });
    res.json(Object.values(results));
  })
}

module.exports = { getQuestions, addQuestion };
