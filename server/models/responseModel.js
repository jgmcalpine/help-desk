const Sequelize = require('sequelize');
const connection = require('../pgConnection');

const Response = connection.define('responses', {
  response: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

// questionid: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//   },
//   username: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },

module.exports = Response;
