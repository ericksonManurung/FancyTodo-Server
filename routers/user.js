const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.post('/login', UserController.loginUser)
router.post('/regis', UserController.registerUser)

module.exports = router