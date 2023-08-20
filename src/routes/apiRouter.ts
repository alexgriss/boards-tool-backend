import express from 'express';

import { Board, Card, Group, User } from '../models';

import { generateRouter } from './generateRouter';

export const apiRouter = express.Router();

apiRouter.use('/users', generateRouter(User));
apiRouter.use('/boards', generateRouter(Board));
apiRouter.use('/groups', generateRouter(Group));
apiRouter.use('/cards', generateRouter(Card));
