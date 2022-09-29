const express = require('express');
const {
  createCar,
  getCar,
  getCars,
  deleteCar,
  updateCar
} = require('../controllers/carController');

const router = express.Router()

// create GET request to get all cars from database
router.get('/', getCars)

// create a GET request to get one single car
router.get('/:id', getCar)

// create a POST reqest to post a new car
router.post('/', createCar);

// create a DELETE request and to delete the Car at /:id
router.delete('/:id', deleteCar);

// create a PATCH request to update the Car at /:id
router.patch('/:id', updateCar);

module.exports = router;