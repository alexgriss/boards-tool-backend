import express from 'express';

import { findUser } from '../controllers';
import { Board, Card, Group, User } from '../models';

import { generateRouter } from './generateRouter';

export const apiRouter = express.Router();

const userRouter = generateRouter(User);

userRouter.get('/:username', findUser(User));

apiRouter.use('/users', userRouter);
apiRouter.use('/boards', generateRouter(Board));
apiRouter.use('/groups', generateRouter(Group));
apiRouter.use('/cards', generateRouter(Card));
