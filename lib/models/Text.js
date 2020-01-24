const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
},
{
  toJSON: {
    virtual: true
  }
});

module.exports = mongoose.model('Text', schema);
