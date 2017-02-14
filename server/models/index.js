const Profiles = require('./userProfilesModel');
const Users = require('./userModel');
const Questions = require('./questionModel');
const Messages = require('./messageModel');

const Sequelize = require('sequelize');
const connection = require('../pgConnection');

Profiles.belongsTo(Users);
Questions.belongsTo(Users);
Users.hasOne(Profiles);

connection.sync();

module.exports = {
  Profiles,
  Users,
  Questions,
  Messages,
};
