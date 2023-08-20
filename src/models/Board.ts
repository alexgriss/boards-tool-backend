import mongoose from 'mongoose';

import { IBoard } from '../entities';

import { groupSchema } from './Group';

export const boardSchema = new mongoose.Schema<IBoard>({
  name: String,
  items: [groupSchema],
});

export const Board = mongoose.model('Board', boardSchema);
