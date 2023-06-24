const express = require('express');
const router = express.Router();

const ordersController = require('../controllers/ordersController');
const productsController = require('../controllers/productsController');
const usersController = require('../controllers/usersController');

// Orders routes
router.get('/orders', ordersController.getAll);
router.get('/orders/:id', ordersController.getOne);
router.post('/orders', ordersController.create);
router.put('/orders/:id', ordersController.update);
router.delete('/orders/:id', ordersController.delete);

// Products routes
router.get('/products', productsController.getAll);
router.get('/products/:id', productsController.getOne);
router.post('/products', productsController.create);
router.put('/products/:id', productsController.update);
router.delete('/products/:id', productsController.delete);

// Users routes
router.get('/users', usersController.getAll);
router.get('/users/:id', usersController.getOne);
router.post('/users', usersController.create);
router.put('/users/:id', usersController.update);
router.delete('/users/:id', usersController.delete);
router.post('/users/login', usersController.login);

module.exports = router;
