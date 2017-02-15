const Profiles = require('./userProfilesModel');
const Users = require('./userModel');
const Questions = require('./questionModel');
const Responses = require('./responseModel');
const QuestionStatus = require('./questionStatusModel');

const Sequelize = require('sequelize');
const connection = require('../pgConnection');

Users.hasMany(Questions);
Users.hasMany(Responses);
Profiles.hasOne(Users);
Questions.belongsTo(QuestionStatus);
Responses.belongsTo(Questions);

connection.sync();

module.exports = {
  Profiles,
  Users,
  Questions,
  Responses,
  QuestionStatus,
};
