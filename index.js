const express = require('express');
const app = express();
const routerApi = require('./routes');
const { errorHandler, logErrors, boomErrorHandler } = require('./middlewares/error.handler')

const port = 3000;

app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler)
app.use(errorHandler);

app.listen(port, () => {
  console.log('Running in port: ' + port);
});
