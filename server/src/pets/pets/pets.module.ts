import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pets } from './pets.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pets])],
  providers: [PetsService, PetsController],
})
export class PetsModule {}
