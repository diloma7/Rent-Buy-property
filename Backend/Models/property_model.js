const mongoose = require('mongoose')

var PropertySchema = new mongoose.Schema({
  income: {
    type: String,
    // required: true
  },
  tax: {
    type: String,
    // required: true
  },
  grocery: {
    type: String,
    // required: true
  },
  water: {
    type: String,
    // required: true
  },
  travel: {
    type: String,
    // required: true
  },
  other: {
    type: String,
    // required: true
  }

});

module.exports = mongoose.model('property', PropertySchema)