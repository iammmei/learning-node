const http = require('http') 
const fs = require('fs');
const path = require('path');
const server = http.createServer()



server.on('request', (request, response) => {
    console.log('hello')
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello, Safae!');
  });


server.listen(6200, () => {
   console.log("Server started on http://127.0.0.1:6200");
 }); 

