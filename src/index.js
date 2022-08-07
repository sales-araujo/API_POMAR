const express = require('express')
const morgan  = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const port = process.env.PORT || 21262

const productsPomar = require('./API_PRODUCTS.json')
const messageError = require('./ErrorMessage.json')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extends: true}))
app.use(express.json())
app.use(cors())

// const routers = productsPomar.map((route) => {
//   console.log(route)
//   route.id
//   route.fruit
//   route.genus
//   route.order
// })

app.get("/api/fruit/all", (req, res) => {
  if(res.status(200)){
    res.json(productsPomar)
  } else if(res.status(404)){
    res.json(messageError)
  }
})

app.listen(port, () => {
  console.log(`Express started at http://localhost:${port}`)
})