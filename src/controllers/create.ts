import { Model } from 'mongoose';

import { logger } from '../shared';

export const create = <T>(Model: Model<T>) => {
  return async (req, res) => {
    const body: T = req.body;

    try {
      const user = new Model(body);

      await user.save();

      res.send(user);
    } catch (error) {
      logger.error(error);

      res.status(500).send(error);
    }
  };
};
