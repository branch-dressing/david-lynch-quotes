const { Router } = require('express');
const Text = require('../models/Text');

module.exports = Router()
  .post('/', (req, res, next) => {
    Text
      .create(req.body)
      .then(text => res.send(text))
      .catch(next);
  })
  
  .get('/', (req, res, next) => {
    Text
      .find()
      .then(texts => res.send(texts))
      .catch(next);
  });
