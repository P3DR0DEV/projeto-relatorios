const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const { router } = require('./routes/auth.routes.js')
const { router: index } = require('./routes/index.js')

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));


// => Rotas 
app.use('/api', router)
app.use(index)


module.exports = {
  app
}