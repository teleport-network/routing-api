import express from 'express';
import { routes } from './routes';

const dotenv = require('dotenv')
dotenv.config()

const app = express();
const PORT = process.env.PORT;

// app.use(bodyParser.urlencoded({ extended: false }));
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, OriginType");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
});
// app.use(bodyParser.json);
// app.use(bodyParser.urlencoded({ extended: true }));

routes.forEach((route) => {
  const { method, path, middleware, handler } = route;
  app[method](path, ...middleware, handler);
});

app.listen(PORT, () => {
  console.log(`Express with Typescript! http://localhost:${PORT}`);
});

app.on('uncaughtException', function (err) {
  try {

  } catch (e) {
    console.log('error when exit', e.stack);
  }
});
