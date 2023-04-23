const express = require('express');
const ProductsService = require('../services/product.service')

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.find();

  res.status(200).json(products);
});

/*Important! Specific filters first and after dynamic filters*/
router.get('/filter', (req, res) => {
  res.send("I'm a filter")
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const product = await service.findOne(id)

  if(product === undefined){
    return res.status(404).json({
      message: "Product not found"
    })
  }

  return res.status(200).json(product)
})

router.post('/', async (req, res) => {
  const body = req.body

  const newProduct = await service.create(body)

  res.status(201).json({
    message: "created",
    data: newProduct,
  })
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const body = req.body
    const updatedProduct = await service.update(id, body)

    res.json(updatedProduct)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const response = await service.delete(id)

  res.json(response)
})

module.exports = router;
