'use strict';

const Dota2Api = require('dota2-api');

const da = Dota2Api.create('15FCAF7E8C19F991CD94B7023E55A8E6');

const options = { game_mode: 1 };

da.getMatchHistory(options).then(function(result) {
  console.log(result);
}, function(errorResponseStatusText) {
  console.log(errorResponseStatusText);
});

// Create the chat configuration
module.exports = function (io, socket) {

  //get information about a dota2match

  // Emit the status event when a new socket client is connected
  io.emit('startMatch', {
    type: 'status',
    text: 'Is now connected',
    created: Date.now()
  });

  // Send a chat messages to all connected sockets when a message is received
  socket.on('chatMessage', function (message) {
    message.type = 'message';
    message.created = Date.now();
    message.profileImageURL = socket.request.user.profileImageURL;
    message.username = socket.request.user.username;

    // Emit the 'chatMessage' event
    io.emit('chatMessage', message);
  });

  // Emit the status event when a socket client is disconnected
  socket.on('disconnect', function () {
    io.emit('chatMessage', {
      type: 'status',
      text: 'disconnected',
      created: Date.now(),
      profileImageURL: socket.request.user.profileImageURL,
      username: socket.request.user.username
    });
  });
};
