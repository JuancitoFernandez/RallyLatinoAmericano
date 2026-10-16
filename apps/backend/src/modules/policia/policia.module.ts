import { Module } from '@nestjs/common';
import { PoliciaController } from './policia.controller';
import { PoliciaService } from './policia.service';

@Module({
  controllers: [PoliciaController],
  providers: [PoliciaService],
})
export class PoliciaModule {}
