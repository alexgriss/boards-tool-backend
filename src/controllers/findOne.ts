import { Model } from 'mongoose';

import { logger } from '../shared';

export const findOne = <T>(Model: Model<T>) => {
  return async (req, res) => {
    try {
      const id: string = req.params.id;

      const items = await Model.findOne({ _id: id });

      res.send(items);
    } catch (error) {
      logger.error(error);

      res.status(500).send(error);
    }
  };
};
