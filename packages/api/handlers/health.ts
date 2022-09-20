import { Handler } from '../types';
import {
  ChainId,
  ID_TO_CHAIN_ID,
} from "@teleswap/smart-order-router";

const chainId: ChainId = ID_TO_CHAIN_ID(420);

export const health: Handler = (req, res) => {
  res.send('Pong');
};
