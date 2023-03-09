const express = require('express');
const { create, show, update, deletar, showOne } = require('../controllers/turmaController');
const { validUser } = require('../middlewares/validUser');
const router = express.Router()

router.get('/', validUser, show)
router.get('/:id', validUser, showOne)
router.post('/create', validUser, create)
router.delete('/delete/:id', validUser, deletar)
router.put('/update/:id', validUser, update)

module.exports = { router }