import { IRoom } from '../rooms/types';
import { IUser } from '../users/types';

export interface IMessage {
  room: IRoom;
  sentBy: IUser;
  content: string;
}
