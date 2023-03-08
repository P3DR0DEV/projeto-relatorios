const express = require('express');
const { create, show } = require('../controllers/alunoController');
const { validUser } = require('../middlewares/validUser');
const router = express.Router()

router.post('/', validUser, create);
router.get('/', validUser, show);

module.exports = { router }