import { IMessage } from '../../messages/types';
import { IUser } from '../../users/types';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IRoom } from '../types';
import { User } from '../../users/entities/user.entity';

@Entity({ name: 'rooms' })
export class Room implements IRoom {
  @PrimaryGeneratedColumn('uuid')
  code: string;

  @ManyToOne(() => User, (user) => user.rooms)
  users: [IUser, IUser];
  messages: IMessage[];
}
