import { Document } from 'mongoose';

export interface IPokemon extends Document {
  id: number;
  name: string;
  type1: string;
  type2: string;
  total: number;
  hp: number;
  attact: number;
  defense: number;
  spAtk: number;
  spDef: number;
  speed: number;
  generation: number;
  legendary: boolean;
}

export interface ICSVPokemon {
  '#': string;
  Name: string;
  'Type 1': string;
  'Type 2': string;
  Total: string;
  HP: string;
  Attack: string;
  Defense: string;
  'Sp. Atk': string;
  'Sp. Def': string;
  Speed: string;
  Generation: string;
  Legendary: string;
}
export interface IPokemonResponse {
  previous: number;
  next: number;
  limit: number;
  total: number;
  data: any;
}

export type QueryParams = {
  page?: string;
  limit?: string;
};
