const router = require('express').Router()
const userController = require('../controllers/jokeController')

router.get('/', userController.getData)


module.exports = router