require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const connectDB = require('../config/dbConn')
const carRoutes = require('../routes/cars')
const PORT = 3000;

// connect to mongodb
connectDB();

// parse data to json
app.use(express.json());

// use 'use' method as to create static files (use the bundle files)
app.use('/build', express.static(path.join(__dirname, '../build')))
// use get method to display index.html to endpoint '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
})

// routes - when we fire a request to /api/cars, send routes from 'cars' directory
app.use('/api/cars', carRoutes);

// listen for requests and log when database is connected
mongoose.connection.once('open', () => {
  console.log('Connected to mongoDB');
  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
})