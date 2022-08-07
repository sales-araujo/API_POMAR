const express = require('express')
const morgan  = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const port = process.env.PORT || 21262

const productsPomar = require('./public/API_PRODUCTS.json')
const messageError = require('./public/ErrorMessage.json')

const app = express()

const path = require("path");
const Router = require('./modules/router/router');
const router = new Router(path.join(__dirname,'routes'));

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extends: true}))
app.use(express.json())
app.use(cors())

app.get('/api/fruit/all', (req, res) => {
  if(res.status(200)){
    res.json(productsPomar)
  } else if(res.status(404)){
    res.json(messageError)
  }
})

app.listen(port, () => {
  console.log(`Express started at http://localhost:${port}`)
})