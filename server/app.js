require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const indexRouter = require('./routes/index')

const mongoose = require('mongoose')
const dbUrl = 'mongodb://localhost/classic_fox_live_code1'

mongoose.connect(dbUrl, {useNewUrlParser: true})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors())

app.use('/', indexRouter)

app.listen(port, () => {
  console.log(`Connected in port ${port}`)
})