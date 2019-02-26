// Our web framework
const express = require('express');
const bodyParser = require('body-parser');
// Initialise the database within our application
const db = require('./models');

/* Setup express */
const app = express();
const port = 3000;
// Automatically parse body of incoming requests into Javascript objects
app.use(bodyParser.json());
// Setup api endpoing
app.use('/api', require('./api'));
// Setup serving of static assets, disable for now
//app.use(express.static('public'))
// Start listening on port
app.listen(port, () =>
  console.log(`SPAB server up and running on port ${port}!`)
);
