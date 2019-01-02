var http = require('http');

var server = http.createServer(function(req, res) {
    // We can access "url" property which says url of request /register, /api etc.
    console.log('Request was made: ' + req.url);
    // Response header
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // End response and send it to browser
    res.end('Hey peeps!');
});

server.listen(3000, '127.0.0.1');
console.log('You are now listening to port 3000');