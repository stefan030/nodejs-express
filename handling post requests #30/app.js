var express = require('express');
var bodyParser = require('body-parser');

// Parse data and store it in variable urlencodedParser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

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
    res.render('contact', {queryString: req.query});
});

// User middleware for post request to parse data and get access to req.body which allow us to use data from form
// In render we will pass new view page which will confirm that we successfully submitted our form and display data entered into form
// which we passed as second parameter in render method
app.post('/contact', urlencodedParser, (req, res) => {
    console.log(req.body);
    res.render('contact-success', {data: req.body});
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