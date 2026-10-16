import { Module } from '@nestjs/common';
import { BomberoController } from './bombero.controller';
import { BomberoService } from './bombero.service';

@Module({
  controllers: [BomberoController],
  providers: [BomberoService],
})
export class BomberoModule {}
