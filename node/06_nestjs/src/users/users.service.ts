import { Injectable } from '@nestjs/common';
import { User } from './users.interface';

@Injectable()
export class UsersService {
  findAll(): User[] {
    return [
      { id: 1, username: 'bret', email: 'sincere@april.biz' },
      { id: 2, username: 'antonette', email: 'shanna@melissa.tv' },
      { id: 3, username: 'samantha', email: 'nathan@yesenia.net' },
    ];
  }
}
