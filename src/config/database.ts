import mongoose from 'mongoose';
import { MONGO_URL } from '../constants/pokeapi.constants';

export async function connectToMongo() {
  try {
    mongoose.Promise = global.Promise;
    await mongoose.connect(MONGO_URL);
    console.log('Connected to MongoDB');
  } catch (e: Error | unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error(e);
    }
  }
}

export async function disconnectToMongo() {
  try {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (e: Error | unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error(e);
    }
  }
}
