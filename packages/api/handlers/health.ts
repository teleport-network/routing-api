import { Handler } from '../types';

export const health: Handler = (req, res) => {
  res.send('Pong');
};
