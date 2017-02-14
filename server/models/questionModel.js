const Sequelize = require('sequelize');
const connection = require('../pgConnection');
// const User = require('./userModel');

const Question = connection.define('questions', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  question: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Question;

