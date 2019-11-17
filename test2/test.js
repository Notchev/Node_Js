/*
-------------------------------- METHOD 1 -----------------------------------
// Import a module
const http = require('http')

// Declare an http server
http.createServer(function (req, res) {

  // Write a response header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Write a response content
  res.end('Hello World\n');

// Start the server
}).listen(8080)

// HERE WE MUST INCREMENT THE VALUE OF LOCALHOST IN ORDER TO RE COMPILE THE PROJECT 
// curl localhost:8080 or go to http://localhost:8080
*/

/* -------------------------------- METHOD 2 ----------------------------------- */ 

const http = require('http')
const serverHandle = function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  }
  
  const server = http.createServer(serverHandle);
  server.listen(8081)