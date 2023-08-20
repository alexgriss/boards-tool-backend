import { Model } from 'mongoose';

import { logger } from '../shared';

export const removeAll = <T>(Model: Model<T>) => {
  return async (req, res) => {
    try {
      await Model.deleteMany({});
    } catch (error) {
      logger.error(error);

      res.status(500).send(error);
    }
  };
};
