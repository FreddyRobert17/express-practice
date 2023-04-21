const express = require('express');
const app = express();

const routerApi = require('./routes');

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hey, this is my express server');
});

app.get('/new-route', (req, res) => {
  res.send('Hey! Im new route');
});

routerApi(app)


app.listen(port, () => {
  console.log('Running in port: ' + port);
});
