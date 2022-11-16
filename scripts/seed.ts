import fs from 'fs';
import path from 'path';
import csvParser from 'csv-parser';
import mongoose from 'mongoose';
import { connectToMongo, disconnectToMongo } from '../src/config/database';
import { ICSVPokemon } from '../src/interfaces/pokemon.interface';
import { Pokemon } from '../src/models/pokemon.model';

const pokemonPath = path.join(__dirname, './pokemon.csv');

(async () => {
  await connectToMongo();
  await main();
  await disconnectToMongo();
  process.exit();
})();

export async function clear() {
  console.log('Running clear()');
  await mongoose.connection.db.dropDatabase();
}

export async function read(): Promise<ICSVPokemon[]> {
  console.log('Reading...');
  let seedPath = pokemonPath;
  let seedData: ICSVPokemon[] = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(seedPath, { encoding: 'utf-8' })
      .pipe(csvParser())
      .on('data', (row) => {
        seedData.push(row);
      })
      .on('end', () => {
        resolve(seedData);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

export async function write(seedData: ICSVPokemon[]) {
  await Promise.all(
    seedData.map(async (csvPokemon) => {
      try {
        const pokemonNormalized = {
          id: +csvPokemon['#'],
          name: csvPokemon.Name,
          type1: csvPokemon['Type 1'],
          type2: csvPokemon['Type 2'],
          total: +csvPokemon.Total,
          hp: +csvPokemon.HP,
          attact: +csvPokemon.Attack,
          defense: +csvPokemon.Defense,
          spAtk: +csvPokemon['Sp. Atk'],
          spDef: +csvPokemon['Sp. Def'],
          speed: +csvPokemon.Speed,
          generation: +csvPokemon.Generation,
          legendary: csvPokemon.Legendary === 'true'
        };
        const newPokemon = new Pokemon(pokemonNormalized);
        console.log(newPokemon);
        await newPokemon.save();
      } catch (e: Error | unknown) {
        if (e instanceof Error) {
          console.log(e?.message);
        } else {
          console.log(e);
        }
      }
    })
  );
}

export async function main() {
  const args = process.argv;
  const action = args[2];

  switch (action) {
    case 'pokemons':
      await clear();
      const seedData = await read();
      await write(seedData);
      break;
    case 'clear':
      await clear();
      break;
    default:
      break;
  }
}
