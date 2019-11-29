
const url = require('url')
const qs = require('querystring')

module.exports = {
    serverHandle: function (req, res) {
        const route = url.parse(req.url)
        const path = route.pathname 
        const params = qs.parse(route.query)
      
        res.writeHead(200, {'Content-Type': 'text/plain'});
   
        if (path === '/') {
            res.write('Welcome to our first Homework. \n')
            res.write('Type /hello?name=[yourname] in your url link for a surprise, \nType /hello/sarah for a short intro of Sarah. \nType /hello/estelle for a short intro of estelle')
          } 
       else if (path === '/hello/sarah') {
            res.write("Hello , my name is Sarah I'm 21 and currently doing my lab")
          } 
      else if (path === '/hello/estelle') {
            res.write("Hello , my name is Estelle I'm 21 and currently doing my lab")
          } 
       else if (path === '/hello' && 'name' in params) {
            res.write('Hello ' + params['name'])
          } 
         else 
        { 
            res.writeHead(404, {'Content-Type': 'text/plain'})
        }
        res.end();
      }
    }