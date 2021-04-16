const router = require('express').Router()
const routesTodo = require('./todo')
const routesUser = require('./user')
const {authentication} = require('../middlewares/auth')

router.get('/', (req,res)=>{
    res.send('Hello World')
})

router.use('/users', routesUser)

//aplikasi level (Authentication)
router.use(authentication)

router.use('/todos',routesTodo)


module.exports = router