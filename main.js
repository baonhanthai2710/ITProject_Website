

import express from 'express';
import { engine } from 'express-handlebars';
import { dirname, extname } from 'path';
import { fileURLToPath } from 'url';

const app = express();

app.use(express.static('public'));

// Set up Handlebars view engine
app.engine('hbs', engine());
app.set('view engine', 'hbs');
app.set('views', './views');

app.engine('hbs', engine({
    extname: 'hbs',
}));

app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/productsManagement', (req, res) => {
    res.render('productsManagement');
});

app.get('/orderManagement', (req, res) => {
    res.render('productsManagement');
});

app.get('/customerManagement', (req, res) => {
    res.render('customerManagement');
});

// Start the server
app.listen(3000, function() {
    console.log('Server started on http://localhost:3000');
});