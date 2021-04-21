const router = require('express').Router()
const routesTodo = require('./todo')
const routesUser = require('./user')
const {authentication} = require('../middlewares/auth')
const axios = require('axios')

router.get('/', (req,res)=>{
    res.send('Hello World')
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