import express from 'express';
import { newOrder  } from '../controller/order';


const order = express.Router();
order.post('/order', newOrder);
export { order };