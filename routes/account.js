const express = require('express')
const { authMiddleware } = require('../middlewares/auth')
const { getBalance } = require('../controllers/account')
const router = express.Router()


router.get('/balance', authMiddleware, getBalance)

module.exports = router