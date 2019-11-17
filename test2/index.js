// LAB 1 


const http = require('http')
 // Import Node url module
const url = require('url')
const qs = require('querystring')
var name = '' ;
name = '' ; 

if (name == 'Sarah')
{
const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>LAB1</title>' +
'    </head>' + 
'    <body>' +
'         <p>Hello Sarah et Estelle, My name is Sarah and Im doing this lab with Estelle cest super!</p>' +        
'    </body>' +
'</html>'
const serverHandle = function (req, res) {
    // Retrieve and print the queryParams
    const queryParams = qs.parse(url.parse(req.url).query);
    console.log(queryParams);
  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(content);
    res.end();
} 
const server = http.createServer(serverHandle);
  server.listen(8087)
}

if (name == 'Estelle')
{
const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>LAB1</title>' +
'    </head>' + 
'    <body>' +
'         <p>Hello !</p>' +
name + 
'    </body>' +
'</html>'
const serverHandle = function (req, res) {
    // Retrieve and print the queryParams
    const queryParams = qs.parse(url.parse(req.url).query);
    console.log(queryParams);
  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(content);
    res.end();
} 
const server = http.createServer(serverHandle);
  server.listen(8088)
}

if ((name != 'Sarah') && (name != 'Estelle')) 
{ 
const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ERROR 404</title>' +
'    </head>' + 
'    <body>' +
'         <p>Page not found...!</p>' +
'    </body>' +
'</html>'
const serverHandle = function (req, res) {
    // Retrieve and print the queryParams
    const queryParams = qs.parse(url.parse(req.url).query);
    console.log(queryParams);
  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(content);
    res.end();
} 
const server = http.createServer(serverHandle);
  server.listen(8089)
}

