import { Module } from '@nestjs/common';
import { MedicinaModule } from './modules/medicina/medicina.module';
import { PoliciaModule } from './modules/policia/policia.module';
import { BomberoModule } from './modules/bombero/bombero.module';

@Module({
  imports: [MedicinaModule, PoliciaModule, BomberoModule],
})
export class AppModule {}
