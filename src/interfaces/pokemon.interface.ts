import { Document } from 'mongoose';

export interface IPokemon extends Document {
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
