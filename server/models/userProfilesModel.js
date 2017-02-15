const Sequelize = require('sequelize');
const connection = require('../pgConnection');
// const User = require('./userModel');

const Profiles = connection.define('profiles', {
  profileType: {
    type: Sequelize.INTEGER,
  },
  description: {
    type: Sequelize.STRING,
  },
});

module.exports = Profiles;

