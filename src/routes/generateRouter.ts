import express from 'express';
import { Model } from 'mongoose';

import {
  create,
  findAll,
  findOne,
  removeAll,
  removeOne,
  update,
} from '../controllers';

export const generateRouter = <T>(Model: Model<T>) => {
  const router = express.Router();

  router.post('/', create(Model));

  router.get('/', findAll(Model));
  router.get('/:id', findOne(Model));

  router.put('/:id', update(Model));

  router.delete('/', removeAll(Model));
  router.delete('/:id', removeOne(Model));

  return router;
};
