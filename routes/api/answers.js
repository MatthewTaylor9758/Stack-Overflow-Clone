const express = require('express');
const asyncHandler = require('express-async-handler');

const { Question, User, Answer } = require('../../db/models');

const router = express.Router();

router.get(
  '/',
  asyncHandler(async(req, res, next) => {
    console.log('whatttttt')
    const answers = await Answer.findAll({
      include: { model: User },
      order: [['updatedAt', 'DESC']]
    });
    res.json({ answers });
  })
)


module.exports = router;
