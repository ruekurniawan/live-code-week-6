const express = require('express')
const router = express.Router()
const userRoutes = require('../routes/user')
const jokeRoutes = require('../routes/joke')
const {Authenticate} =require('../middlewares/Authentication')

router.use('/users', userRoutes)
router.use(Authenticate)
router.use('/jokes', jokeRoutes)

module.exports = router