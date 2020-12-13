const express = require('express');
const asyncHandler = require('express-async-handler');

const { Question, User, Answer } = require('../../db/models');

const router = express.Router();

router.put(
  '/',
  asyncHandler(async(req, res, next) => {
    const question_id = req.body.questionId;
    console.log(question_id)
    console.log('whatttttt')
    const answers = await Answer.findAll({
      include: [{ model: User }],
      order: [['updatedAt', 'DESC']]
    });
    const question = await Question.findByPk(questionId);
    // console.log(answers);
    // answers.unshift(question);
    console.log(answers)
    return res.json({ answers });
  })
)


module.exports = router;
