var express = require('express');

// Grab Express functionality (variety of HTTP methods that can help us respond to requests)
var app = express();


// We tell express to use 'ejs' as view engine (Template Engine)
app.set('view engine', 'ejs');

// Middleware - Code that runs between request and response.
app.use('/assets', express.static('assets'));
    // next(); // When we run this middleware, we need to tell NodeJS to go to the next middleware using next() method else app will break



app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact');
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