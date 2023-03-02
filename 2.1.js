const http = require('http');

const PORT = 8080; // Configure your desired port number

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello, world!');
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
