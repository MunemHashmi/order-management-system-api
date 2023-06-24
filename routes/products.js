const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Retrieve all products
router.get('/', productsController.getAll);

// Retrieve a single product
router.get('/:id', productsController.getOne);

// Create a new product
router.post('/', productsController.create);

// Update a product
router.put('/:id', productsController.update);

// Delete a product
router.delete('/:id', productsController.delete);

module.exports = router;
