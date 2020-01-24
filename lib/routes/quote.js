const { Router } = require('express');
const Quote = require('../models/Quote');

module.exports = Router()
  .post('/', (req, res, next) => {
    Quote
      .create(req.body)
      .then(quote => res.send(quote))
      .catch(next);
  });

