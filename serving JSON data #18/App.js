var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res) {
    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'}); // app/json
    var myObj = {
      name: 'Stefan',
      job: 'Junior Developer',
      age: 23
    };
    res.end(JSON.stringify(myObj)); // .end() expects string or a buffer, we can't pass obj, so we need to serialize obj
});

server.listen(3000, '127.0.0.1');
console.log('You are now listening to port 3000');