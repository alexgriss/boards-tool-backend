import mongoose from 'mongoose';

import { IGroup } from '../entities';

import { cardSchema } from './Card';

export const groupSchema = new mongoose.Schema<IGroup>({
  name: String,
  items: [cardSchema],
});

export const Group = mongoose.model('Group', groupSchema);
