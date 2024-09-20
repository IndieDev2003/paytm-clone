const express = require('express')
const router = express.Router()
const {register, login, update} = require('../controllers/user.js')
const {authMiddleware} = require('../middlewares/auth.js')
router.post('/signin', login)
router.post('/register', register)
router.put('/',authMiddleware, update)

module.exports =  router