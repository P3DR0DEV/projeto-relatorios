const express = require('express');
const router = express.Router();
const { validUser } = require('../middlewares/validUser');


router.get('/', validUser, (req, res) => {
  res.send('Passed')
})

module.exports = { router }