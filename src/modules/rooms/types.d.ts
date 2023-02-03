import { IMessage } from "../messages/types";
import { IUser } from '../users/types';

export interface IRoom {
  code: string;
  users: [IUser, IUser]
  messages: IMessage[]
}