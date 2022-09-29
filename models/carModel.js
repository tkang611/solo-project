const mongoose = require('mongoose');

// declare Schema as mongoose.Schema method
const Schema = mongoose.Schema;

// declare the carSchema as a new schema
const carSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  props: {
    type: [String],
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
}, { timestamps: true })

// export the mongoose model, passing in the name of the collection: Car, and the carSchema
module.exports = mongoose.model('Car', carSchema);