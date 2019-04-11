const jwt = require('jsonwebtoken')

module.exports = {
  sign(valueToken) {
    let token = jwt.sign(valueToken, process.env.JWT_TOKEN)
    return token
  },
  verify(valueToken) {
    let decode = jwt.verify(valueToken, process.env.JWT_TOKEN)
    return decode
  }
}