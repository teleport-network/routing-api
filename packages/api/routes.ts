import { health } from './handlers/health';
import { Route } from './types';
import {quote} from "./handlers/quote";

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
    middleware: [],
    handler: quote,
  },
];
