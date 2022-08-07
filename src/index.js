require('dotenv/config');
const express = require('express')
const morgan  = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000

const productsPomar = require('./API_PRODUCTS.json')
const messageError = require('./ErrorMessage.json')

const { getFruitById } = require('./middleware/middleware')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extends: true}))
app.use(express.json())
app.use(cors())

app.get("/api/fruit/all", (req, res) => {
  if(!productsPomar) return res.status(400).json(messageError)
  return res.status(200).json(productsPomar)
})

app.get("/api/fruit/:id", getFruitById, (req, res) => {
  const { fruitData } = req
  
  return res.json(fruitData)
})

app.listen(port, () => {
  console.log(`Express started at http://localhost:${port}`)
})