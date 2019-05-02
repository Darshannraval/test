var http=require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Darshan, Happy summer');
}).listen(8080);
