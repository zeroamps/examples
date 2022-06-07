import { Controller, Get } from '@nestjs/common';

import { TodosEntity } from './todos.entity';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  findAll(): TodosEntity[] {
    return this.todosService.findAll();
  }
}
