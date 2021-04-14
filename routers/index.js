const router = require('express').Router()
const routesTodo = require('./todo')
const routesUser = require('./user')

router.get('/', (req,res)=>{
    res.send('Hello World')
})

router.use('/todos',routesTodo)
router.use('/users', routesUser)

module.exports = router