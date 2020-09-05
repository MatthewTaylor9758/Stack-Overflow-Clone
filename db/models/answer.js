'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    userId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {});
  Answer.associate = function(models) {
    // associations can be defined here
    Answer.hasMany(models.Vote, {
      foreignKey: 'answerId'
    });
    Answer.belongsTo(models.Question, {
      foreignKey: 'questionId'
    });
    Answer.belongsTo(models.User, {
      foreignKey: 'userId'
    })
  };
  return Answer;
};
