import { Request, Response, Router } from 'express';
import { PokemonService } from '../services/pokemon.service';

export class PokemonController {
  public router = Router();

  constructor(private pokemonService: PokemonService) {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.get('/', this.findAll);
    this.router.post('/', this.add);
    this.router.route('/:id').get(this.find);
    this.router.route('/:id').put(this.update);
    this.router.route('/:id').delete(this.delete);
  }

  private findAll = async (_: Request, res: Response) => {
    try {
      const pokemon = await this.pokemonService.findAll();
      res.status(200).send(pokemon);
    } catch (e) {
      res.status(500).send(e);
    }
  };

  private add = async (req: Request, res: Response) => {
    try {
      const addPokemonResult = await this.pokemonService.add(req.body);
      res.status(201).send(addPokemonResult);
    } catch (e) {
      res.status(500).send(e);
    }
  };

  private find = async (req: Request, res: Response) => {
    try {
      const pokemonResult = await this.pokemonService.find(req.params.id);
      res.status(200).send(pokemonResult);
    } catch (e: Error | unknown) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      } else {
        res.status(500).send(e);
      }
    }
  };

  private update = async (req: Request, res: Response) => {
    try {
      const updatePokemonResult = await this.pokemonService.update(req.params.id, req.body);
      res.status(200).send(updatePokemonResult);
    } catch (e: Error | unknown) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      } else {
        res.status(500).send(e);
      }
    }
  };
  private delete = async (req: Request, res: Response) => {
    try {
      const deletePokemonResult = await this.pokemonService.delete(req.params.id);
      res.status(200).send(deletePokemonResult);
    } catch (e: Error | unknown) {
      if (e instanceof Error) {
        res.status(500).send(e.message);
      } else {
        res.status(500).send(e);
      }
    }
  };
}
