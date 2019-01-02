var fs = require('fs');

/*
*  Each time we send chunk of data through the stream so the user doesn't have to wait till the video is fully loaded at once
*
* */

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8'); // Which file to read through the stream

// Each time we send a "chunk" of data, this function will run. We can use this for writing stream and to send out chunks of data so our client doesn't have to wait till the video is fully loaded
// Check writeable stream #15 for more
// ".on 'data" we listen whenever we receive chunk of data, we run the function
myReadStream.on('data', function(chunk){
    console.log('New chunk received:');
    console.log(chunk);
});















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