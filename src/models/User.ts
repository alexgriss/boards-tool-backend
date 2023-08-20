import mongoose from 'mongoose';

import { IUser } from '../entities';

import { boardSchema } from './Board';

export const userSchema = new mongoose.Schema<IUser>({
  username: String,
  items: [boardSchema],
});

export const User = mongoose.model('User', userSchema);
