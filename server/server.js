require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const connectDB = require('../config/dbConn')
const PORT = 3000;

// connect to mongodb
connectDB();

app.use('/build', express.static(path.join(__dirname, '../build')))
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
})

mongoose.connection.once('open', () => {
  console.log('Connected to mongoDB');
  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
})