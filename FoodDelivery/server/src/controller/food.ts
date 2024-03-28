import { Response, Request } from 'express';
import {FoodModel} from "../model/Food"

export const newFood = async (req: Request, res: Response) => {
  try {
    await FoodModel.create(req.body);
    console.log(req.body);
    return res.status(201).send({ success: true });
  } catch (error) {
    return res.status(400).send({ error });
  }
};

