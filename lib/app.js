const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/texts', require('./routes/text'));
app.use('/api/v1/quotes', require('./routes/quote'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
