'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert('Questions', [
          {
            userId: 1,
            content: 'How do I say "hello world" in javascript?',
            score: 0,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            userId: 2,
            content: 'How do I define a function in javascript?',
            score: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            userId: 2,
            content: 'I am trying to make a redux store and I am not sure how many reducers I am going to need.',
            score: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            userId: 3,
            content: 'How do I say hello world in python?',
            score: 0,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            userId: 1,
            content: 'Now that I know how to say "hello world" in javascript, is there a way to say "hello <some person\'s name>"?',
            score: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
        ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Questions', null, {});
  }
};
