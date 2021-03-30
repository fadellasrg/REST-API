const express = require('express')
const bodyParser = require('body-parser')
const routeProducts = require('./src/route/product')

const { PORT } = require('./src/helper/env')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(routeProducts)

app.listen(PORT, () => {   
    console.log(`Server running on PORT ${PORT}`)
})      