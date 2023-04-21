const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];

  const { size } = req.query

  const limit = size || 3

  for(let index = 0; index < limit; index++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl(),
    })
  }

  res.status(500).json(products);
});

/*Important! Specific filters first and after dynamic filters*/
router.get('/filter', (req, res) => {
  res.send("I'm a filter")
})

router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id: id,
    name: 'product 2',
    price: 2000,
  })
})

router.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId: categoryId,
    id: productId,
    name: 'product 1',
    price: 2000,
  })
})

router.post('/', (req, res) => {
  const body = req.body
  res.json({
    message: "created",
    data: body,
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body

  res.json({
    message: "updated",
    data: body,
    id,
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body

  res.json({
    message: "deleted",
    id,
  })
})

module.exports = router;
