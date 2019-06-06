var http=require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Darshan, Good Evening!!!!');
}).listen(8080);
