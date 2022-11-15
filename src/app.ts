import { Application } from 'express';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import { PokemonController } from './controllers/pokemon.controller';
import { PokemonService } from './services/pokemon.service';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setConfig();
    this.setControllers();
  }

  private setConfig() {
    // Allows us to receive requests with data in json format
    this.app.use(express.json({ limit: '50mb' }));
    // Allows us to receive requests with data in x-www-form-urlencoded format
    this.app.use(express.urlencoded({ limit: '50mb', extended: true }));
    // Enables morgan
    this.app.use(morgan('tiny'));
    // Enables helmet
    this.app.use(helmet());
    // Enables cors
    this.app.use(cors());
  }

  private setControllers() {
    // Creating a new instance of our Pokemon Controller
    const pokemonController = new PokemonController(new PokemonService());

    // Telling express to use our Controller's routes
    this.app.use('/pokemon', pokemonController.router);
  }
}

export default new App().app;
