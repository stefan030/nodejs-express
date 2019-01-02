var http = require('http');
var fs = require('fs');


/*
* Pipe takes data from the read stream and then pipes #16 it into a write stream
*
* */

// myReadStream.on('data', function(chunk){
//     console.log('New chunk received');
//     //console.log(chunk);
//     myWriteStream.write(chunk);
// });



var server = http.createServer(function(req, res) { // req and res objects, res obj is writable stream
    // We can access "url" property which says url of request /register, /api etc.
    console.log('Request was made: ' + req.url);
    // Write response header
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // Create read stream using fs module which reads contents of readMe.txt file
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8'); // Which file to read through the stream
    myReadStream.pipe(res); // .pipe is usable only on readable streams as we are piping from a readable stream #14 to writable stream
});

server.listen(3000, '127.0.0.1');
console.log('You are now listening to port 3000');