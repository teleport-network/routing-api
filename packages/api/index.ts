import express from 'express';
import bodyParser from 'body-parser';
import { routes } from './routes';

const dotenv = require('dotenv')
dotenv.config()

const app = express();
const PORT = process.env.PORT;
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

routes.forEach((route) => {
  const { method, path, middleware, handler } = route;
  app[method](path, ...middleware, handler);
});

app.listen(PORT, () => {
  console.log(`Express with Typescript! http://localhost:${PORT}`);
});

app.on('uncaughtException', function (err) {
  console.log('debug joy', 'crash!!!!', err);
  try {

  } catch (e) {
    console.log('error when exit', e.stack);
  }
});
