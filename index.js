const express = require('express');
const app = express();

const routerApi = require('./routes');

const port = 3000;

app.use(express.json());

routerApi(app);

app.listen(port, () => {
  console.log('Running in port: ' + port);
});
