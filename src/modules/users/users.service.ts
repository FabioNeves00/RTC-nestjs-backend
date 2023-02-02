import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  getUserContacts(user: string) {
    return 'This action returns all user contacts';
  }

  addUserToContacts(user: string, userCodeToBeAdded: string) {
    return 'This action adds an user to the list of contacts of another user';
  }

  removeUserFromContacts(user: string, userCodeToBeRemoved: string) {
    return 'This action adds an user to the list of contacts of another user';
  }
}
