import express from 'express';
import { newFood  } from '../controller/food';


const food = express.Router();
food.post('/newfood', newFood);
export { food };