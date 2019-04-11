const router = require('express').Router()
const userController = require('../controllers/userController')
const {Authenticate} = require('../middlewares/Authentication')

router.post('/registrasi', userController.create)
router.post('/login', userController.login)
router.get('/verify', Authenticate, userController.checkLogin)


module.exports = router