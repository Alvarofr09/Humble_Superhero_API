import { Injectable } from '@nestjs/common';
import { Superhero } from './entities/superhero.entity';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import * as path from 'path';

@Injectable()
export class SuperheroesService {
  // Path to the database file
  private dbFilePath = path.join(__dirname, '../../src/data/superheroes.json');

  /**
   * This method attempts to read the superhero data from the file.
   * If the file doesn't exist, it will return an empty array.
   */
  private readDb(): Superhero[] {
    // Check if the file exists before attempting to read it.
    if (!existsSync(this.dbFilePath)) {
      // If the file doesn't exist, log a message and return an empty array.
      console.error(`The file ${this.dbFilePath} does not exist.`);

      return [];
    }

    try {
      // Read the file content with UTF-8 encoding
      const data = readFileSync(this.dbFilePath, 'utf-8');

      // Parse the content as JSON and type it as Superhero[]
      return JSON.parse(data) as Superhero[];
    } catch (error) {
      // If there's an error reading or parsing the file, log the error and return an empty array.
      console.error('Error reading or parsing the database file:', error);
      return [];
    }
  }

  private writeDb(superheroes: Superhero[]) {
    writeFileSync(this.dbFilePath, JSON.stringify(superheroes, null, 2));
  }

  create(CreateSuperheroDto: CreateSuperheroDto) {
    const superheroes = this.readDb();

    const superhero = new Superhero();
    superhero.name = CreateSuperheroDto.name;
    superhero.superpower = CreateSuperheroDto.superpower;
    superhero.humilityScore = CreateSuperheroDto.humilityScore;

    superheroes.push(superhero);

    this.writeDb(superheroes);
  }

  findAll() {
    const superheroes = this.readDb();
    return superheroes.sort((a, b) => a.humilityScore - b.humilityScore);
  }
}
