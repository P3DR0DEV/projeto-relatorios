const express = require('express')
const router = express.Router()
const { validUser } = require('../middlewares/validUser')
const { uploadController } = require('../controllers/uploadController')


router.post('/', validUser, uploadController)

module.exports = { router }