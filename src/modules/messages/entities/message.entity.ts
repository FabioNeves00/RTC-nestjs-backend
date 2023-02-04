import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IMessage } from '../types';
import { Room } from '../../rooms/entities/room.entity';
import { User } from '../../users/entities/user.entity';
import { IRoom } from '../../rooms/types';
import { IUser } from '../../users/types';

@Entity({ name: 'messages' })
export class Message implements IMessage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Room, (room) => room.messages)
  room: IRoom;

  @OneToOne(() => User)
  sentBy: IUser;

  @Column()
  content: string;

  @CreateDateColumn()
  sendAt: Date;
}
