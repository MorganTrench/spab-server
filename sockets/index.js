const serverEmitter = require('../events');
const eventListings = require('../util').events;

const sockets = new Set();

module.exports = io => {
  serverEmitter.on(eventListings.SAMPLE_RECIEVED, sample => {
    io.emit(eventListings.SAMPLE_RECIEVED, sample);
  });

  serverEmitter.on(eventListings.PHOTO_RECIEVED, photo => {
    io.emit(eventListings.PHOTO_RECIEVED, photo);
  });

  io.on('connection', function(socket) {
    sockets.add(socket);

    socket.on('disconnect', function() {
      sockets.delete(socket);
      console.log('connection dropped');
    });

    console.log('connection established');
  });
};
