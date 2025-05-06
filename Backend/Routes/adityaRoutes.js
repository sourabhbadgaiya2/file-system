const express = require('express');
const router = express.Router();
const adityaController = require('../controllers/adityaController');

// Create
router.post('/', adityaController.createDetails);

// Read All
router.get('/', adityaController.getAllDetails);

// Read One
router.get('/:id', adityaController.getDetailsById);

// Update
router.put('/:id', adityaController.updateDetails);

// Delete
router.delete('/:id', adityaController.deleteDetails);

module.exports = router;
