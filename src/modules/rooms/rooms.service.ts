import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';

@Injectable()
export class RoomsService {
  create(createRoomDto: CreateRoomDto) {
    return 'This action adds a new room';
  }

  findAll() {
    return `This action returns all rooms`;
  }

  join(roomCode: string) {
    return `This action returns a #${roomCode} room`;
  }

  disconnect(roomCode: string) {
    return `This action removes a #${roomCode} room`;
  }
}
