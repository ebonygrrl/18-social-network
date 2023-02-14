// app dependencies
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

// connect routes
//const routes = require('./controllers');

// mongoose connection
mongoose.connect('mongodb://127.0.0.1/social-network');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use(routes);

app.listen(port, () => console.log(`App is listening on port ${port}`));