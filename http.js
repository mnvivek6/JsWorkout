const http = require('http');

const PORT = 8000;

const server = http.createServer((req, res) => {
 res.end('hi am vivek')
});

server.listen(PORT)
