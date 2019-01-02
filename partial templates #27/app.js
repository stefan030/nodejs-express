var express = require('express');

// Grab Express functionality (variety of HTTP methods that can help us respond to requests)
var app = express();


// We tell express to use 'ejs' as view engine (Template Engine)
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

// Route params #22
app.get('/profile/:name', (req, res) => {
    var data = {
        age: 29,
        job: 'ninja',
        hobbies: ['eating', 'playing video games', 'fishing']
    };
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);