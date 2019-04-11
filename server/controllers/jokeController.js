const Joke = require('../models/jokes')
const axios = require('axios')

class JokeController {
  static getData(req, res) {
    axios({
      method:'get',
      url:'https://icanhazdadjoke.com/api',
    })
      .then(function(response) {
        console.log(response.data)
        res.status(200).json(response.data)
    })
    .catch(err => {
       res.status(500).json(err)
    })
  }
}

module.exports = JokeController