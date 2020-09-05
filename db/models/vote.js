'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    userId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    questionId: DataTypes.INTEGER,
    answerId: DataTypes.INTEGER,
    direction: DataTypes.INTEGER
  }, {});
  Vote.associate = function(models) {
    // associations can be defined here
    Vote.belongsTo(models.User, {
      foreignKey: 'userId'
    });
    Vote.belongsTo(models.Question, {
      foreignKey: 'questionId'
    });
    Vote.belongsTo(models.Answer, {
      foreignKey: 'answerId'
    })
  };
  return Vote;
};
