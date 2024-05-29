import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pets } from './pets.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pets) private readonly petsRepository: Repository<Pets>,
  ) {}
  async findAll(): Promise<Pets[]> {
    return this.petsRepository.find();
  }
}
