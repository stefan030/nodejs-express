var http = require('http');
var fs = require('fs');

/*
*  Each time we send chunk of data through the stream so the user doesn't have to wait till the video is fully loaded at once
*
* */

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8'); // Which file to read through the stream
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt', 'utf8');

// Each time we send a "chunk" of data, this function will run. We can use this for writing stream and to send out chunks of data so our client doesn't have to wait till the video is fully loaded
// Check writeable stream #15 for more
// ".on 'data" we listen whenever we receive chunk of data, we run the function and write it to 'writeMe.txt'
myReadStream.on('data', function(chunk){
    console.log('New chunk received');
    //console.log(chunk);
    myWriteStream.write(chunk);
});

// The difference between read/write method and 'fs' method we used for writing/reading files and folders:
/*
* We are splitting file into chunks of data via stream and buffer so we receive data more quickly,
* No need to wait until all the data has been loaded into memory
*
*
* *** We can do this even faster using NodeJS Pipes ****
* */













// var server = http.createServer(function(req, res) {
//     // We can access "url" property which says url of request /register, /api etc.
//     console.log('Request was made: ' + req.url);
//     // Response header
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     // End response and send it to browser
//     res.end('Hey peeps!');
// });
//
// server.listen(3000, '127.0.0.1');
// console.log('You are now listening to port 3000');