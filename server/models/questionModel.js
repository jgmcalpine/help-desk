const Sequelize = require('sequelize');
const connection = require('../pgConnection');
// const User = require('./userModel');

const Question = connection.define('questions', {
  question: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  asker: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  file: {
    type: Sequelize.TEXT,
  },
  answered: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Question;
