const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.get('/', UserController.listUser)
router.post('/', UserController.registerUser)

module.exports = router