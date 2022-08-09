const productsPomar = require('../API_PRODUCTS.json')
const messageError = require('../ErrorMessage.json')

module.exports = {
  getFruitById: (req, res, next) => {
    const { slug } = req.params
    
    const fruitData = productsPomar.find(fruit => {
      return fruit.id === parseInt(slug)
    })

    req.fruitData = fruitData

    if(fruitData){
      return res.json(fruitData)
    }
    
    return next();
  },
  getFruitByName: (req, res, next) => {
    const { slug } = req.params

    const fruitData = productsPomar.find(item => {
      return item.fruit.toLowerCase() === slug
    })

    req.fruitData = fruitData

    return next();
  }
}