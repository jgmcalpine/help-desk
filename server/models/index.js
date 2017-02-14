const Profiles = require('./userProfilesModel');
const Users = require('./userModel');
const Questions = require('./questionModel');
const Messages = require('./messageModel');
const QuestionStatus = require('./questionStatusModel');

const Sequelize = require('sequelize');
const connection = require('../pgConnection');

Users.hasOne(Profiles);
Users.hasMany(Questions);
Questions.hasOne(QuestionStatus);

connection.sync();

module.exports = {
  Profiles,
  Users,
  Questions,
  Messages,
  QuestionStatus,
};
