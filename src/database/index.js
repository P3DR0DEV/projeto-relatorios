const Sequelize = require('sequelize');
const database = require('../config/database');
const { Aluno } = require('../Models/Aluno');
const { Foto } = require('../Models/Foto');
const { Turma } = require('../Models/Turma');

const models = [Aluno, Foto, Turma];

const connection = new Sequelize(database);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
