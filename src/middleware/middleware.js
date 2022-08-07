const productsPomar = require('../API_PRODUCTS.json')
const messageError = require('../ErrorMessage.json')

module.exports = {
  getFruitById: (req, res, next) => {
    const { id } = req.params
    console.log(id)
    
    const fruitDataId = productsPomar.find(fruit => {
      return fruit.id === parseInt(id)
    })

    req.fruitDataId = fruitDataId
    
    if(!fruitDataId){
      return res.status(400).json(messageError)
    }

    return next();
  }
}

