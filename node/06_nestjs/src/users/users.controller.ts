import { Controller, Get } from '@nestjs/common';

import { UsersEntity } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll(): UsersEntity[] {
    return this.usersService.findAll();
  }
}
