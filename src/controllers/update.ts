import { Model } from 'mongoose';

import { logger } from '../shared';

export const update = <T>(Model: Model<T>) => {
  return async (req, res) => {
    try {
      const id: string = req.params.id;
      const body: T = req.body;

      const items = await Model.findByIdAndUpdate(id, body);

      res.send(items);
    } catch (error) {
      logger.error(error);

      res.status(500).send(error);
    }
  };
};
