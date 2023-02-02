import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { CreateRoomDto } from './dto/create-room.dto';
import { RoomsService } from './rooms.service';

@WebSocketGateway()
export class RoomsGateway {
  constructor(private readonly roomsService: RoomsService) {}

  @SubscribeMessage('createRoom')
  create(@MessageBody() createRoomDto: CreateRoomDto) {
    return this.roomsService.create(createRoomDto);
  }

  @SubscribeMessage('findAllRooms')
  findAll() {
    return this.roomsService.findAll();
  }

  @SubscribeMessage('joinRoom')
  join(@MessageBody() roomCode: string) {
    return this.roomsService.join(roomCode);
  }

  @SubscribeMessage('disconnectRoom')
  disconnect(@MessageBody() roomCode: string) {
    return this.roomsService.disconnect(roomCode);
  }
}
