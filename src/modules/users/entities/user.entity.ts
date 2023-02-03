import {
  Column,
  CreateDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IUser } from '../types';
import { Room } from '../../rooms/entities/room.entity';
import { IRoom } from '../../rooms/types';

export class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  createdAt: string;

  @OneToMany(() => User, (user) => user.contacts)
  contacts: IUser[];

  @OneToMany(() => Room, (room) => room.users)
  rooms: IRoom[];

  @Column()
  online: boolean;

  @Column()
  lastTimeOnline: Date;
}
