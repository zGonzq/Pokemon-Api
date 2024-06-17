import { Router } from 'express';
import { PokemonServices } from '../services/pokemonServices';
import { Pokemon } from '../models/pokemon';

const router = Router();
const pokemonServices = new PokemonServices();

router.get('/pokemon/list', async (req, res) => {
    const allPokemon = await pokemonServices.getAllPokemons();
    res.json(allPokemon);
});

router.get('/pokemon/find/:id', async (req, res) => {
    const id = req.params.id;
    const pokemon = await pokemonServices.getPokemonById(parseInt(id));
    res.json(pokemon);
});


router.post('/pokemon/add', async (req, res) => {
    const pokemon: Pokemon = req.body;
    const result = await pokemonServices.addPokemon(pokemon);
    res.json(result);
});


router.put('/pokemon/update', async (req, res) => {
    const pokemon: Pokemon = req.body;
    const result = await pokemonServices.updatePokemon(pokemon);
    res.json(result);
});

router.delete('/pokemon/delete/:id', async (req, res) => {
    const id = req.params.id;
    const result = await pokemonServices.deletePokemon(parseInt(id));
    res.json(result);
});

export default router;