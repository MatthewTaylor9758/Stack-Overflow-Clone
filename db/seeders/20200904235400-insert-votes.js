'use strict';


// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        options.tableName = 'Votes';
        return queryInterface.bulkInsert(options, [
          {
            userId: 1,
            type: 'question',
            questionId: 2,
            answerId: null,
            direction: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            userId: 1,
            type: 'question',
            questionId: 3,
            answerId: null,
            direction: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            userId: 2,
            type: 'question',
            questionId: 5,
            answerId: null,
            direction: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            userId: 3,
            type: 'answer',
            questionId: null,
            answerId: 1,
            direction: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            userId: 1,
            type: 'answer',
            questionId: null,
            answerId: 4,
            direction: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
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
