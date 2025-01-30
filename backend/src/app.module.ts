import { Module } from '@nestjs/common';
import { SuperherosModule } from './superheroes/superheroes.module';

@Module({
  imports: [SuperherosModule],
})
export class AppModule {}
