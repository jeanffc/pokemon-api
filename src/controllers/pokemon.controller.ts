import { Request, Response, Router } from 'express';
import { PokemonService } from '../services/pokemon.service';

export class PokemonController {
  public router = Router();

  constructor(private pokemonService: PokemonService) {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.get('/', this.sayHello);
    this.router.post('/', this.add);

    this.router.get('/all', this.findAll);
  }

  private sayHello = (_: Request, res: Response) => {
    const welcomeMessage = this.pokemonService.getWelcomeMessage();
    res.send(welcomeMessage);
  };

  private findAll = async (_: Request, res: Response) => {
    try {
      const pokemon = await this.pokemonService.findAll();
      res.send(pokemon);
    } catch (e) {
      res.status(500).send(e);
    }
  };

  private add = async (req: Request, res: Response) => {
    try {
      const addPokemonResult = await this.pokemonService.add(req.body);
      res.send(addPokemonResult);
    } catch (e) {
      res.status(500).send(e);
    }
  };
}
