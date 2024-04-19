const express = require('express');
const app = express();
const loginRouter = require('./router/loginRouter');

// Basic settings
app.listen(8000);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/', loginRouter);
