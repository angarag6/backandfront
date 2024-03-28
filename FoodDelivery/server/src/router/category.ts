import express from 'express';
import { newCategory  } from '../controller/category';

const category = express.Router();
category.post('/newCategory', newCategory);
export { category };