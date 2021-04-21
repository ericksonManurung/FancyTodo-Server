require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const router = require('./routers')
const errorHandler = require('./middlewares/erorrHandler')
const cors = require('cors')

app.use(cors())
// body parser
// json
app.use(express.json())
// url encoded
app.use(express.urlencoded({extended:true}))
app.use(router)
// harus dipaling bawah || urutan pengaruh
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`your server run at http://localhost:${port}`)
})