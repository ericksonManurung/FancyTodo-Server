const router = require('express').Router()
const routesTodo = require('./todo')

router.get('/', (req,res)=>{
    res.send('Hello World')
})

router.use('/todos',routesTodo)

module.exports = router