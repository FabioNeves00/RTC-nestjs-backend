import { IRoom } from '../rooms/types';
export interface IUser {
  name: string;
  avatar: string;
  createdAt: string;
  contacts: IUser[];
  rooms: IRoom[];
  online: boolean;
  lastTimeOnline: Date;
}