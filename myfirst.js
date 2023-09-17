//acá agrego modulo "http" para que pueda crear mi servidor local- Se agrega con la 
//funcion "require"

var http = require('http');
http.createServer(function(req, res){ //creo servidor
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);


