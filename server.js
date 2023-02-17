// app dependencies
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

// connect routes
//const routes = require('./controllers');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use(routes);

// mongoose connection
const connectionStringURI = 'mongodb://127.0.0.1:27017/social-network';

// Declare a variable to hold the connection
let db;

// Creates a connection to a MongoDB instance and returns the reference to the database
mongodb.connect(
  // Defines connection between app and MongoDB instance
  connectionStringURI,
  // Sets connection string parser and Server Discover and Monitoring engine to true and avoids warning
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  },
  (err, client) => {
    // Use client.db() constructor to add new db instance
    db = client.db();
    app.listen(port, () => { console.log(`App is listening at http://localhost:${port}`) });
  }
);