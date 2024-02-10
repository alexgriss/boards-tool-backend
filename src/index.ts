import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import path from 'path';

import { connectToDatabase } from './config';
import { errorHandler } from './middlewares';
import { apiRouter } from './routes';
import { EXPRESS_SUCCESS_MESSAGE, logger } from './shared';

config({ path: path.join(__dirname, '../', '.env') });

const app = express();

const PORT = process.env.PORT || 5000;

connectToDatabase();

app.use(cors());

app.use(express.json());

app.use('/api', apiRouter);

app.use(errorHandler);

const server = app.listen(PORT, () => {
  logger.debug(`${EXPRESS_SUCCESS_MESSAGE} ${PORT}.`);
});

process.on('unhandledRejection', (error) => {
  logger.error(error);

  server.close(() => process.exit(1));
});
