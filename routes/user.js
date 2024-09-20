const express = require('express')
const router = express.Router()
const {register, login} = require('../controllers/user.js')

router.post('/signin', login)
router.post('/register', register)
// router.post('/updateInfo')

module.exports =  router