require('dotenv').config();
const connect = require('../utils/connect');
const Text = require('../models/Text');
const quotes = require('../data/dl-quotes');
const mofm = require('../data/m-of-m-i');
const scene = require('../data/scene-by-scene');
const bafta = require('../data/BAFTA');
const bigFish = require('../data/catcingTheBigFish');
const npr = require('../data/NPR');
const talks = require('../data/theTalks');


function seedTextData(text) {
  Text
    .create({ text: text })
    .then(console.log('seedTextData done'));
}

connect();
seedTextData(quotes);
seedTextData(mofm);
seedTextData(scene);
seedTextData(bafta);
seedTextData(bigFish);
seedTextData(npr);
seedTextData(talks);
