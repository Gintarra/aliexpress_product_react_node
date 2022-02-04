const express = require('express')
const router = express.Router()

const {data} = require('../controllers/main')

router.post('/product', data)


module.exports = router