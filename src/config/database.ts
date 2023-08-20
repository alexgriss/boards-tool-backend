import mongoose from 'mongoose';

import { logger, MONGODB_SUCCESS_CONNECT_MESSAGE } from '../shared';

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    logger.debug(MONGODB_SUCCESS_CONNECT_MESSAGE);
  } catch (error) {
    logger.error(error);
  }
};
