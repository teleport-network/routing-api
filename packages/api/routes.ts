import { health } from './handlers/health';
import { Route } from './types';
import {quote} from "./handlers/quote";
const cors = require('cors')

export const routes: Route[] = [
  {
    method: 'get',
    path: '/health',
    middleware: [],
    handler: health,
  },
  {
    method: 'post',
    path: '/quote',
    middleware: [cors()],
    handler: quote,
  },
];
