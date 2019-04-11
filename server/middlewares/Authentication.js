const { verify } = require('../helpers/jwt')
const User = require('../models/user')

module.exports = {
  Authenticate: function (req, res, next) {
    try {
      let token = req.headers.token

      if (token) {
        let decode = verify(token)
        req.authenticate = decode

        User
          .findOne({
            _id: req.authenticate.id
          })
          .then(user => {
            if (user) {
              req.user = user
              next()
            } else {
              req.status(500).json({
                msg: 'invalid token'
              })
            }
          })
      } else {
        res.status(404).json({
          msg: 'You must be login'
        })
      }
    }
    catch (err) {
      res.status(404).json({
        msg: 'Invalid Token'
      })
    }
  }
}