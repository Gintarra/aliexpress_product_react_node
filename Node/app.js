const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.listen(4000)

const router = require('./routes/main')
app.use('/', router)