const express = require('express')
const morgan  = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const productsPomar = require('./public/API_PRODUCTS.json')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extends: false}))
app.use(express.json())
app.use(cors())

app.get('/api/fruit/all', (req, res) => {
  res.json(productsPomar)
})

app.listen(21262, () => {
  console.log(`Express started at http://localhost:21262`)
})