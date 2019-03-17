/* Node requirements */
const http = require('http');
/* Web framework stuff*/
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const socketio = require('socket.io');
/* Externalised Config */
const dotenv = require('dotenv');
dotenv.config();

/* Setup express and sockets */
const app = express();
const server = http.Server(app);
const io = socketio(server);

/* Our modules */
const api = require('./api'); // api endpoints
const sockets = require('./sockets')(io); // emit events to clients when new data is available
const db = require('./models'); // initialise the database
const static = require('./static'); // serve static files

// Setup api endpoing, parse body of incoming requests into Javascript objects
app.use(cors());
app.use('/api', bodyParser.json(), bodyParser.urlencoded(), api);
// Serve 'static' files
app.use(static.router);

// Start listening on port
server.listen(process.env.PORT || 3000);
