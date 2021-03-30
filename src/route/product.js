const express = require('express')
const routeProducts = express.Router()
const{
    getAllProducts,
    insertProducts
} = require('../controller/product')

routeProducts
    .get('/api/products', getAllProducts)
    .post('/api/products', insertProducts)

    
module.exports = routeProducts