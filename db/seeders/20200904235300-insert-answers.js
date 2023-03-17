'use strict';

// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code

const { loadOptions } = require("@babel/core");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        options.tableName = 'Answers';
        return queryInterface.bulkInsert(options, [
          {
            userId: 1,
            questionId: 3,
            content: 'I am going to have to answer this later.',
            score: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            userId: 2,
            questionId: 1,
            content: 'I am going to have to answer this later.',
            score: 0,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            userId: 2,
            questionId: 4,
            content: 'I am going to have to answer this later.',
            score: 0,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            userId: 3,
            questionId: 2,
            content: 'I am going to have to answer this later.',
            score: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete(options, null, {});
  }
};
