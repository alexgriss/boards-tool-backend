import { IBoard } from '../boards';

export interface IUser {
  username: string;
  items: IBoard[];
}
