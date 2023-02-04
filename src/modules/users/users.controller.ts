import { Controller, Get, Post, Body, Delete, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('User')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  getUserProfile(user: string) {
    return this.usersService.getUserContacts(user);
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
