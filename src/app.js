const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const { router: authRouter } = require('./routes/auth.routes.js')
const { router: uploadRouter } = require('./routes/uploadRouter.js')
const { router: alunoRouter } = require('./routes/alunoRouter.js')
require('./database')

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));


// => Rotas 
app.use('/api', authRouter)
app.use('/uploads', uploadRouter)
app.use('/alunos', alunoRouter)

module.exports = {
  app
}