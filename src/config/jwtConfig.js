const jwt = require("jsonwebtoken")
require('dotenv').config()


function jwtCreate(user) {
  const token = jwt.sign({ user }, process.env.SECRET, {
    expiresIn: '7d'
  })
  return token
}

module.exports = {
  jwtCreate
}