const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const router = require('./router/router.js')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/',router)


app.listen(port,function(){
    console.log("youre listening to port " + port)
})