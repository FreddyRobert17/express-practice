const joi = require('joi')


const id = joi.string().uuid();
const name = joi.string().min(3).max(15)
const price = joi.number().integer().min(10)
const image = joi.string().uri()


const getProductSchema = joi.object({
  id: id.required(),
})

const createProductSchema = joi.object({
   name: name.required(),
   price: price.required(),
   image: image.required()
})


const updateProductSchema = joi.object({
   name: name,
   price: price,
   image: image
})


module.exports = { createProductSchema, updateProductSchema, getProductSchema }
