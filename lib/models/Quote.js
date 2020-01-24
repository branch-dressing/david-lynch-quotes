const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  quote: {
    type: String,
    required: true
  },
},
{
  toJSON: {
    virtual: true
  }
});

module.exports = mongoose.model('Quote', schema);
