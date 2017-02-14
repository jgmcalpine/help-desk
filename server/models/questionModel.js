const Sequelize = require('sequelize');
const connection = require('../pgConnection');

const Question = connection.define('questions', {
  question: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Question;

