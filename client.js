const WebSocket = require('ws');

//replace the url with yours after pushing the app wss://<your-app>.<your-host>.hana.ondemand.com/
//do not specify a port
//you can use secure websockets because of the SSL-Termination
const url = "https://websocket-cf.cfapps.sap.hana.ondemand.com:80"
const ws = new WebSocket(url);

ws.on('open', function() {
  const message = 'Hi there!'
  ws.send(message);
  console.log('Sent Message: '+ message)
});
ws.on('error',function(data){
  console.log('Error: ' + data);
});
ws.on('message', function(data, flags) {
  console.log('Recieved Message: ' + data);
});
ws.on('close', function() {
  console.log('Disconnected from Server');
}); 