import { Body, Controller, Get, Post } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly SuperheroesService: SuperheroesService) {}

  @Post()
  create(@Body() createSuperheroDto: CreateSuperheroDto) {
    this.SuperheroesService.create(createSuperheroDto);
  }

  @Get()
  findAll() {
    return this.SuperheroesService.findAll();
  }
}
