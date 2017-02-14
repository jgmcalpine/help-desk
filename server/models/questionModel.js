const Sequelize = require('sequelize');
const connection = require('../pgConnection');
// const User = require('./userModel');

const Question = connection.define('questions', {
  question: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // asker: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // file: {
  //   type: Sequelize.TEXT,
  // },
  // // question_status: {
  // //   type: Sequelize.BOOLEAN,
  // //   defaultValue: false,
  // // },
  // userid: {
  //   type: Sequelize.INTEGER,
  // },
});

// const QuestionStatus = connection.define('question_status', {
//   opened: {
//     type: Sequelize.BOOLEAN,
//     allowNull: false,
//   },
//   pending: {
//     type: Sequelize.BOOLEAN,
//     allowNull: false,
//   },
//   solved: {
//     type: Sequelize.BOOLEAN,
//     allowNull: false,
//   },
//   need_more_clarification: {
//     type: Sequelize.BOOLEAN,
//     allowNull: false,
//   },
// });

// // Will add a questionId attribute to QuestionStatus to hold the primary key
// // value for Question
// QuestionStatus.belongsTo(Question);

// Question.sync(
//   // {
//   //   // remove when tables solidified
//   //   force: true,
//   // }
// );

// QuestionStatus.sync();

module.exports = Question;
