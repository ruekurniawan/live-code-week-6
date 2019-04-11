const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jokeSchema = new Schema({
  joke: String, 
  userId: Number
})


let Joke = mongoose.model('joke', jokeSchema)

module.exports = Joke