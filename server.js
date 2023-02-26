// app dependencies
const express = require('express');
const db = require('./config/connection');

// express routes
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

db.once('open', () => {
  app.listen(port, () => { console.log(`App is listening at http://localhost:${port}`) });
});