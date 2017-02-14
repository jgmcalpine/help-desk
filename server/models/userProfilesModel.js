const Sequelize = require('sequelize');
const connection = require('../pgConnection');
// const User = require('./userModel');

const Profiles = connection.define('profiles', {
  profile: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
});

module.exports = Profiles;

