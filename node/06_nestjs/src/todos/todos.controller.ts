import { Controller, Get } from '@nestjs/common';

import { Todo } from './todos.interface';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  findAll(): Todo[] {
    return this.todosService.findAll();
  }
}
