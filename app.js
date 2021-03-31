const express = require('express')
const bodyParser = require('body-parser')
const routeProducts = require('./src/route/product')

const app = express()
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(routeProducts)
 
module.exports = app  