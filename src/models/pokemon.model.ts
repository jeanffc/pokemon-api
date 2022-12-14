import { model, Schema } from 'mongoose';
import { IPokemon } from '../interfaces/pokemon.interface';

const PokemonSchema = new Schema({
  id: { type: Number, required: [true, 'Field is required'] }, // NOTE: it is possible N pokemons with the same ID, eg: (ID:720) HoopaHoopa Confined and (ID:720) HoopaHoopa Unbound
  name: { type: String, required: [true, 'Field is required'] },
  type1: { type: String, required: [true, 'Field is required'] },
  type2: { type: String },
  total: { type: Number, required: [true, 'Field is required'] },
  hp: { type: Number, required: [true, 'Field is required'] },
  attact: { type: Number, required: [true, 'Field is required'] },
  defense: { type: Number, required: [true, 'Field is required'] },
  spAtk: { type: Number, required: [true, 'Field is required'] },
  spDef: { type: Number, required: [true, 'Field is required'] },
  speed: { type: Number, required: [true, 'Field is required'] },
  generation: { type: Number, required: [true, 'Field is required'] },
  legendary: { type: Boolean, required: [true, 'Field is required'] }
});

export const Pokemon = model<IPokemon>('Pokemon', PokemonSchema);
