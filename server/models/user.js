const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {hash} = require('../helpers/bcrypt')

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator: function (value) {
        return User
          .findOne({
            email: value,
            _id: { $ne: this._id }
          })
          .then(data => {
            if (data) {
              throw 'Email has been used'
            }
          })
          .catch(err => {
            throw err
          })
      }
    }
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  }
})

userSchema.pre('save', function (next) {
  this.password = hash(this.password)
  next()
})

const User = mongoose.model('user', userSchema)

module.exports = User