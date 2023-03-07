const ad = require('../config/activeDirectory.js');
const { jwtCreate } = require('../config/jwtConfig.js')

require('dotenv').config();
const domain = process.env.DOMAIN;
const permissoes = [
  {
    username: '150367'
  },
  {
    username: '150176'
  }
];

const userAuthenticate = async (req, res) => {
  const { user, pass } = req.body;
  try {
    await ad.authenticate(domain + "\\" + user, pass, (err, auth) => {
      if (auth) {
        const valid = permissoes.find(allowedUsers => allowedUsers.username === user)
        if (!valid) {
          return res.status(403).send(JSON.stringify({
            message: 'Not Allowed'
          }))
        }
        const token = jwtCreate(user)
        res.send(JSON.stringify({
          token
        }))
      }
      else {
        return res.send({ errors: 'Authentication failed, Invalid Credentials.' })
      }
    })
  } catch (err) {
    return res.status(500).send({ message: "ERROR " + err });
  }
};

module.exports = userAuthenticate