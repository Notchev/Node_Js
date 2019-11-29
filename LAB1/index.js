
// Import Node url module

const http = require('http')
const handles = require('./handles')
const server = http.createServer(handles.serverHandle);


  server.listen(1445)
// curl localhost:8080 or go to http://localhost:808


