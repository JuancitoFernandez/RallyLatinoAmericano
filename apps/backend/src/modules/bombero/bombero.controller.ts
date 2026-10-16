import { Controller, Get, Post, Body } from '@nestjs/common';
import { BomberoService } from './bombero.service';

@Controller('bombero')
export class BomberoController {
  constructor(private readonly bomberoService: BomberoService) {}

  @Get()
  findAll() {
    return this.bomberoService.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.bomberoService.create(body);
  }
}
