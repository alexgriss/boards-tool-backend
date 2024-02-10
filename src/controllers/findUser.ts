import { Model } from 'mongoose';

import { logger } from '../shared';

export const findUser = <T>(Model: Model<T>) => {
  return async (req, res) => {
    try {
      const username: string = req.params.username;

      const items = await Model.findOne({ username });

      res.send(items);
    } catch (error) {
      logger.error(error);

      res.status(500).send(error);
    }
  };
};
