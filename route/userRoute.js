const {register, login, getUser} = require('../controller/userController')

const route = require('express').Router()

route.post('/',register)

route.post('/login',login)

route.get('/',getUser)

module.exports = route