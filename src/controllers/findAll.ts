import { Model } from 'mongoose';

import { logger } from '../shared';

export const findAll = <T>(Model: Model<T>) => {
  return async (req, res) => {
    try {
      const items = await Model.find({});

      res.send(items);
    } catch (error) {
      logger.error(error);

      res.status(500).send(error);
    }
  };
};
