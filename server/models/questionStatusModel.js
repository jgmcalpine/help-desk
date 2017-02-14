const Sequelize = require('sequelize');
const connection = require('../pgConnection');

const QuestionStatus = connection.define('question_status', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = QuestionStatus;
