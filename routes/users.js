const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Retrieve all users
router.get('/', usersController.getAll);

// Retrieve a single user
router.get('/:id', usersController.getOne);

// Create a new user
router.post('/', usersController.create);

// Update a user
router.put('/:id', usersController.update);

// Delete a user
router.delete('/:id', usersController.delete);

// User login
router.post('/login', usersController.login);

module.exports = router;
