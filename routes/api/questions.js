const express = require('express');
const asyncHandler = require('express-async-handler');

const { Question, User, Answer } = require('../../db/models');
const { generateToken } = require("../util/auth");
const {
  jwtConfig: { expiresIn },
} = require("../../config");


const router = express.Router();

router.put(
  '/',
  asyncHandler(async(req, res, next) => {
    const question_id = req.body.questionId;
    console.log(question_id)
    console.log('hello')
    const answers = await Answer.findAll({
      where: {
        questionId: question_id
      }
    })
    console.log(answers);
    const deleteAnswers = answers.map(async answer => await answer.destroy())
    const question = await Question.findByPk(question_id);
    console.log(question);
    await question.destroy();
  })
)

router.get(
  '/',
  asyncHandler(async(req, res, next) => {
    console.log('********************')
    const questions = await Question.findAll({
      include: { model: User }
    });
    res.json({ questions });
  })
);

router.post(
  '/',
  asyncHandler(async(req, res, next) => {
    const question = Question.create(req.body);
    return res.json({ question });
  })
)


module.exports = router;
