const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

// Retrieve all orders
router.get('/', ordersController.getAll);

// Retrieve a single order
router.get('/:id', ordersController.getOne);

// Create a new order
router.post('/', ordersController.create);

// Update an order
router.put('/:id', ordersController.update);

// Delete an order
router.delete('/:id', ordersController.delete);

module.exports = router;
