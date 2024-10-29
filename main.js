

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

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

// Start the server
app.listen(3000, function() {
    console.log('Server started on http://localhost:3000');
});