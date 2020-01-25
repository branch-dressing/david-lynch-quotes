require('dotenv').config();
const connect = require('../utils/connect');
const Text = require('../models/Text');
const sourceOne = require('../data/dl-quotes');
const sourceTwo = require('../data/m-of-m-i');
const sourceThree = require('../data/scene-by-scene');

function seedTextData(text) {
  Text
    .create({ text: text })
    .then(console.log('seedTextData done'));
}

connect();
seedTextData(sourceOne);
seedTextData(sourceTwo);
seedTextData(sourceThree);
