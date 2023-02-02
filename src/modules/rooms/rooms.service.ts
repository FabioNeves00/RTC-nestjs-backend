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

  findOne(id: number) {
    return `This action returns a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
