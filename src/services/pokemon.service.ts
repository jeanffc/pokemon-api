import { IPokemon, IPokemonResponse } from '../interfaces/pokemon.interface';
import { Pokemon } from '../models/pokemon.model';

export class PokemonService {
  public async findAll(reqPageNumber?: string, reqLimit?: string) {
    const results = {} as IPokemonResponse;

    const total = await Pokemon.countDocuments().exec();
    const pageNumber = (reqPageNumber && parseInt(reqPageNumber)) || 0;
    const limit = (reqLimit && parseInt(reqLimit)) || 12;
    const startIndex = pageNumber * limit;
    const endIndex = (pageNumber + 1) * limit;

    if (startIndex > 0) {
      results.previous = pageNumber - 1;
    }
    if (endIndex < total) {
      results.next = pageNumber + 1;
    }

    results.limit = limit;
    results.total = total;

    results.data = await Pokemon.find().sort({ id: 1 }).skip(startIndex).limit(limit).exec();

    return results;
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
