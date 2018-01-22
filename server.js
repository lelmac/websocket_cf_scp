
const WebSocketServer = require('ws').Server
//We will create the websocket server on the port given by Cloud Foundry --> Port 8080
const ws = new WebSocketServer({ port: process.env.PORT || 3333 });

ws.on('connection', function (socket) {
  socket.on('message', function (message) {
    console.log('Received Message: ' +  message);
    socket.send('Echo: ' + message);
  });
  socket.send('Hi, this is the Echo-Server');
}); 
