const router = require('express').Router()
const routesTodo = require('./todo')
const routesUser = require('./user')
const {authentication} = require('../middlewares/auth')
const axios = require('axios')

router.get('/', (req,res)=>{
    res.send('Hello World')
})


router.get('/news',(req,res,next)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=${process.env.API_KEY}`)
    .then((data) => {
        res.status(200).json({succes:true, data:data.data.articles})
    }).catch((err) => {
        next(err)
    });
})

router.get('/kawalCovidIndonesia',(req,res,next)=>{
    axios.get('https://api.kawalcorona.com/indonesia')
    .then((data) => {
        res.send({succes:true, data:data.data})
    }).catch((err) => {
        next(err)
    });
})

router.use('/users', routesUser)

//aplikasi level (Authentication)
router.use(authentication)

router.use('/todos',routesTodo)


module.exports = router