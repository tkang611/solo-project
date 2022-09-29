const Car = require('../models/carModel');
const mongoose = require('mongoose');

// declare a variable: getCars, to get all cars
const getCars = async (req, res) => {
  // declare a cars variable and await the find method to find all cars and send through json
  const cars = await Car.find({}).sort({createdAt: -1});
  res.status(200).json(cars);
}

// declare a variable: getCar, to get a single car at /:id
const getCar = async (req, res) => {
  // declare a vardiable: id, that will be assigned the value of req.params.id
  const { id } = req.params;

  // if the id sent through the request is invalid, return a 404 and error message
  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such car'});
  }
  // declare a car variable and assign it the value of await findById method, passing in the id variable
  const car = await Car.findById(id);
  // if the car is not found by the id, then return a 404 error with message
  if(!car) {
    return res.status(404).json({error: "No such car"});
  }
  // if all goes well, return a status 200 and send the car model
  res.status(200).json(car);
}

// declare a variable: createCar, that will create a new car model
const createCar = async (req, res) => {
  // declare variables and assign them the value of the corresponding property on req.body
  const {name, props, desc, img} = req.body;
  // add the document to our database
  try {
    // declare a car variable and assign it the value of await on Car create method, passing in all the carSchema props
    const car = await Car.create({name, props, desc, img})
    // send a status of 200 and a json of qthe car model
    res.status(200).json(car);
  } catch (err) {
    // if there is an error, send the error message through json
    res.status(400).json({error: err.message});
  }
}

// create a function: createCar, to delete a car at /:id
const deleteCar = async (req, res) => {
  // declare variables and assign them the value of the corresponding property on req.body
  const { id } = req.params;

  // if the id sent through the request is invalid, return a 404 and error message
  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such car'});
  }
  // declare a car variable, and assign it the value of await result of findOneAndDelete method on car Model, passing the property _id, with id as value
  const car = await Car.findOneAndDelete({_id: id});
  // if a car is not found with that id, return a 404 and error message
  if(!car) {
    return res.status(404).json({error: "No such car"});
  }
  // if all is well, return 202 status and the car variable through json
  res.status(200).json(car);
}

// update a car
const updateCar = async (req, res) => {
  // declare variables and assign them the value of the corresponding property on req.body
  const { id } = req.params;
  
  // if the id sent through the request is invalid, return a 404 and error message
  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such car'});
  }

  const car = await Car.findOneAndUpdate({_id: id}, {
    ...req.body 
  })

  if(!car) {
    return res.status(404).json({error: "No such car"});
  }  

  res.status(200).json(car);
}

module.exports = {
  getCars,
  getCar,
  createCar,
  deleteCar,
  updateCar
}