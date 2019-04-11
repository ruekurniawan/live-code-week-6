const User = require('../models/user')
const {compare} = require('../helpers/bcrypt')
const {sign} = require('../helpers/jwt')

class UserController {
  static create(req, res) {
    User
      .create({
        email: req.body.email,
        password: req.body.password
      })
      .then(data => {
        req.status(201).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static login(req, res) {
    console.log(req.body)
    User
      .findOne({
        email: req.body.email
      })
      .then(user => {
        if(user) {
          // console.log(req.body.password,'====',user.password)
          if(compare(req.body.password, user.password)) {
            let payload = {
              id: user._id
            }

            let token = sign(payload)
            res.status(200).json({
              access_token: token
            })
          } else {
            res.status(400).json({
              msg: 'Invalid Password / Email'
            })
          }
        } else {
          res.status(400).json({
            msg: 'Invali Email / Password'
          })
        }
      })
  }

  static checkLogin(req, res) {
    console.log(req.user)
    User
      .findOne({ _id: req.user._id })
      .then((user) => {
        res.json(user)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

}

module.exports = UserController