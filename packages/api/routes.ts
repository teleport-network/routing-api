import { health } from './handlers/health';
import { Route } from './types';
import {quote} from "./handlers/quote";
import bodyParser from 'body-parser';

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
    middleware: [bodyParser.json(), bodyParser.urlencoded({ extended: false })],
    handler: quote,
  },
];
