import { Controller, Get, Post, Body } from '@nestjs/common';
import { PoliciaService } from './policia.service';

@Controller('policia')
export class PoliciaController {
  constructor(private readonly policiaService: PoliciaService) {}

  @Get()
  findAll() {
    return this.policiaService.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.policiaService.create(body);
  }
}
