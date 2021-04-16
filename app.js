require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const router = require('./routers')

// body parser
// json
app.use(express.json())
// url encoded
app.use(express.urlencoded({extended:true}))
app.use(router)

app.listen(port, ()=>{
    console.log(`your server run at http://localhost:${port}`)
})