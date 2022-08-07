const productsPomar = require('../API_PRODUCTS.json')
const messageError = require('../ErrorMessage.json')

module.exports = {
  getFruitById: (req, res, next) => {
    const { id } = req.params
    
    const fruitData = productsPomar.find(fruit => {
      return fruit.id === parseInt(id)
    })

    req.fruitData = fruitData
    
    if(!fruitData){
      return res.status(400).json(messageError)
    }

    return next();
  }
}