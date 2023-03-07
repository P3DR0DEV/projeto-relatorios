const express = require('express');
const router = express.Router();
const userAuthenticate = require('../controllers/auth.controllers');

// => Definindo as rotas de autenticação
router.post('/login', userAuthenticate); //{POST} localhost:3000/api/login

module.exports = { router }