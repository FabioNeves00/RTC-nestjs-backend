import { Controller, Get, Post, Body, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  getUserContacts(user: string) {
    return this.usersService.getUserContacts(user);
  }

  @Put()
  addUserToContacts(user: string, userCodeToBeAdded: string) {
    return this.usersService.addUserToContacts(user, userCodeToBeAdded);
  }

  @Delete()
  removeUserFromContacts(user: string, userCodeToBeRemoved: string) {
    return this.usersService.removeUserFromContacts(user, userCodeToBeRemoved);
  }
}
