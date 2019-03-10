/* Node requirements */
const path = require('path');
/* Web framework */
const express = require('express');
const bodyParser = require('body-parser');
/* Externalised Config */
const dotenv = require('dotenv');
dotenv.config();
/* Our modules */
const api = require('./api'); // api endpoints
const static = require('./static'); // serve static files
const db = require('./models'); // initialise the database

/* Setup express */
const app = express();
const port = process.env.PORT || 3000;

// Setup api endpoing, parse body of incoming requests into Javascript objects
app.use('/api', bodyParser.json(), bodyParser.urlencoded(), api);
// Serve 'static' files
app.use(static.router);

// Start listening on port
app.listen(port, () =>
  console.log(`SPAB server up and running on port ${port}!`)
);
