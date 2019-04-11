const bcrypt = require('bcrypt')

module.exports = {
  hash(password) {
    return bcrypt.hashSync(password, 10)
  },
  compare(password, hashPasword) {
    return bcrypt.compareSync(password, hashPasword)
  }
}