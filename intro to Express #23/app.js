var express = require('express');

// Grab Express functionality (variety of HTTP methods that can help us respond to requests)
var app = express();


app.get('/', (req, res) => {
    res.send('this is the homepage');
});

app.get('/contact', (req, res) => {
    res.send('this is the contact page');
});

// Route params #22
app.get('/profile/:id', (req, res) => {
    res.send('You requested to see a profile with the name of: ' + req.params.id);
});

app.listen(3000);