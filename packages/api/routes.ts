import { login } from './handlers/auth';
import { home } from './handlers/home';
import { signup } from './handlers/user';
import { requestLogger } from './middleware/requestLogger';
import { Route } from './types';
import {quote} from "./handlers/quote";

export const routes: Route[] = [
  {
    method: 'get',
    path: '/',
    middleware: [],
    handler: home,
  },
  {
    method: 'post',
    path: '/users',
    middleware: [],
    handler: signup,
  },
  {
    method: 'post',
    path: '/login',
    middleware: [requestLogger],
    handler: login,
  },
  {
    method: 'post',
    path: '/quote',
    middleware: [],
    handler: quote,
  },
];
