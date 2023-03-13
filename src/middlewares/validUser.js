require('dotenv').config()
const { verify } = require('jsonwebtoken')

function validUser(req, res, next) {
  try {
    const token = req.headers['authorization'];
    if (!token) return res.status(400).send({ error: 'You must be logged in' })
    const bearerToken = token.split(' ')
    if (bearerToken[0] !== 'Bearer') return res.status(400).send({ error: 'Invalid type Token' })

    verify(bearerToken[1], process.env.SECRET, (e, data) => {
      if (e) return res.status(400).send({ e })
      if (!data) return res.status(400).send({ error: 'Invalid token' })
      else {
        next()
      }
    })
  } catch (error) {
    return res.status(400).json(error);
  }
}


module.exports = {
  validUser
}