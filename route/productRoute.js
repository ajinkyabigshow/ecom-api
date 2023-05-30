const {getProduct,postProduct} = require('../controller/productController')
const auth = require('../middelWear/auth')

const route = require('express').Router()

route.post('/',auth,postProduct)

route.get('/',getProduct)

module.exports = route