import { IPokemon } from '../interfaces/pokemon.interface';
import { Pokemon } from '../models/pokemon.model';

export class PokemonService {
  public findAll(): Promise<IPokemon[]> {
    return Pokemon.find().sort({ id: 1 }).exec();
  }

  public add(pokemon: IPokemon): Promise<IPokemon> {
    const newPokemon = new Pokemon(pokemon);
    return newPokemon.save();
  }

  public find(id: string) {
    const pokemon = Pokemon.findOne({ id: id }).exec();

    if (!pokemon) {
      throw new Error(`Pokemon with id '${id}' not found`);
    }

    return pokemon;
  }

  public async update(id: string, pokemon: IPokemon) {
    const updatedPokemon = await Pokemon.findByIdAndUpdate(id, pokemon).exec();

    if (!updatedPokemon) {
      throw new Error(`Pokemon with id '${id}' not found`);
    }

    return updatedPokemon;
  }

  public async delete(id: string) {
    const deletedPokemon = await Pokemon.findByIdAndDelete(id).exec();

    if (!deletedPokemon) {
      throw new Error(`Pokemon with id '${id}' not found`);
    }

    return deletedPokemon;
  }
}
