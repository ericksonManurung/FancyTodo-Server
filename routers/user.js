const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.post('/login', UserController.login)
router.post('/regis', UserController.register)
router.post('/googleLogin', UserController.googleLogin)

module.exports = router