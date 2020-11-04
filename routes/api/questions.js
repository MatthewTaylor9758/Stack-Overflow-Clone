const express = require('express');
const asyncHandler = require('express-async-handler');

const { Question, User } = require('../../db/models');
const { generateToken } = require("../util/auth");
const {
  jwtConfig: { expiresIn },
} = require("../../config");


const router = express.Router();

router.delete(
  '/:questionId',
  asyncHandler(async(req, res, next) => {
    const question = req.params;
    console.log(question)
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
