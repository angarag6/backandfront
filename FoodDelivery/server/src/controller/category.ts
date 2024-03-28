import { Response, Request } from 'express';
import {CategoryModel} from "../model/Category"

export const newCategory = async (req: Request, res: Response) => {
  try {
    await CategoryModel.create(req.body);
    console.log(req.body);
    return res.status(201).send({ success: true });
  } catch (error) {
    return res.status(400).send({ error });
  }
};

