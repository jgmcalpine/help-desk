const Sequelize = require('sequelize');
const connection = require('../pgConnection');

const QuestionStatus = connection.define('question_status', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = QuestionStatus;
