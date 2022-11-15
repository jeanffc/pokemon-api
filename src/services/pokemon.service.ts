import { IPokemon } from '../interfaces/pokemon.interface';
import { Pokemon } from '../models/pokemon.model';

export class PokemonService {
  public getWelcomeMessage() {
    return 'Hi';
  }

  public findAll(): Promise<IPokemon[]> {
    return Pokemon.find().exec();
  }

  public add(pokemon: IPokemon): Promise<IPokemon> {
    const newPokemon = new Pokemon(pokemon);
    return newPokemon.save();
  }
}
