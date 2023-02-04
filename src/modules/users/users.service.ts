import { generateUserCustomCode } from '@app/util';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const userCode = async () => {
      const code = (await generateUserCustomCode(createUserDto.name)).code;
      if (
        (await this.userRepository.find({ where: { userCustomCode: code } }))
          .length > 0
      ) {
        userCode();
      } else {
        return code;
      }
    };

    const user = await this.userRepository.insert({
      ...createUserDto,
      online: true,
      lastTimeOnline: new Date(),
      userCustomCode: await userCode(),
    });

    return user;
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
