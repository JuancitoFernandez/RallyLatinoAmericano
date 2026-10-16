import { Controller, Get, Post, Body } from '@nestjs/common';
import { MedicinaService } from './medicina.service';

@Controller('medicina')
export class MedicinaController {
  constructor(private readonly medicinaService: MedicinaService) {}

  @Get()
  findAll() {
    return this.medicinaService.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.medicinaService.create(body);
  }
}
