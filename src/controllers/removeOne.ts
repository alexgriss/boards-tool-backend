import { Model } from 'mongoose';

import { logger } from '../shared';

export const removeOne = <T>(Model: Model<T>) => {
  return async (req, res) => {
    try {
      const id: string = req.params.id;

      await Model.deleteOne({ _id: id });
    } catch (error) {
      logger.error(error);

      res.status(500).send(error);
    }
  };
};
