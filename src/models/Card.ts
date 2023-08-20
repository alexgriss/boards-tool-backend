import mongoose from 'mongoose';

import { ICard } from '../entities';

export const cardSchema = new mongoose.Schema<ICard>(
  {
    name: String,
  },
  { timestamps: true }
);

export const Card = mongoose.model('Card', cardSchema);
