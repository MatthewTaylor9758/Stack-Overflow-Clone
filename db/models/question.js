'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    userId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
    Question.belongsTo(models.User, {
      foreignKey: 'userId'
    });
    Question.hasMany(models.Answer, {
      foreignKey: 'questionId'
    });
    Question.hasMany(models.Vote, {
      foreignKey: 'questionId'
    })
  };
  return Question;
};
