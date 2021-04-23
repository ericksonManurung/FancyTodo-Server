const router = require('express').Router()
const routesTodo = require('./todo')
const routesUser = require('./user')
const {authentication} = require('../middlewares/auth')
const axios = require('axios')

router.get('/', (req,res)=>{
    res.send('Hello World')
})


router.get('/news',(req,res)=>{
    axios.get('https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=7f2c2f07d84244c29725474208b2c9d4')
    .then((data) => {
        console.log(data.data.articles)
        res.status(200).json({succes:true, data:data.data.articles})
    }).catch((err) => {
        res.send(err)
    });
})

router.get('/kawalCovidIndonesia',(req,res)=>{
    axios.get('https://api.kawalcorona.com')
    .then((positif) => {
        res.send({succes:true, data:positif.data})
    }).catch((err) => {
        res.send(err)
    });
})

router.get('/kawalCovidPositif',(req,res)=>{
    axios.get('https://api.kawalcorona.com/positif')
    .then((positif) => {
        res.send({succes:true, data:positif.data})
    }).catch((err) => {
        res.send(err)
    });
})

router.get('/kawalCovidSembuh',(req,res)=>{
    axios.get('https://api.kawalcorona.com/sembuh')
    .then((positif) => {
        res.send({succes:true, data:positif.data})
    }).catch((err) => {
        res.send(err)
    });
})

router.get('/kawalCovidMeninggal',(req,res)=>{
    axios.get('https://api.kawalcorona.com/meninggal')
    .then((positif) => {
        res.send({succes:true, data:positif.data})
    }).catch((err) => {
        res.send(err)
    });
})

router.use('/users', routesUser)

//aplikasi level (Authentication)
router.use(authentication)

router.use('/todos',routesTodo)


module.exports = router