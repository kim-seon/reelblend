import { Controller } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { Pets } from './pets.entity';
import { PetsService } from './pets.service';

@Controller()
@Resolver(() => Pets)
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Query((returns) => [Pets])
  async pets(): Promise<Pets[]> {
    return this.petsService.findAll();
  }
}
