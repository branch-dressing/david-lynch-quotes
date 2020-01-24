const { Router } = require('express');
const Quote = require('../models/Quote');
const chance = require('chance').Chance();

module.exports = Router()
  .post('/', (req, res, next) => {
    Quote
      .create(req.body)
      .then(quote => res.send(quote))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Quote
      .find()
      .then(quotes => chance.pickone(quotes))
      .then(quote => res.send(quote))
      .catch(next);
  });
