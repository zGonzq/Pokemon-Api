    import { PokemonRepository } from '../repository/pokemonDB';
    import { Pokemon } from '../models/pokemon';
    import { QueryResult } from 'mysql2';

    export class PokemonServices {
        db: PokemonRepository = new PokemonRepository();   

        public async getAllPokemons(): Promise<Pokemon[]> {
            return this.db.getAllPokemon();
        }

        public async addPokemon(pokemon: Pokemon): Promise<QueryResult> {
            return this.db.createPokemon(pokemon);
        }

        public async updatePokemon(pokemon: Pokemon): Promise<QueryResult> {
            console.log(pokemon);
            return this.db.updatePokemon(pokemon);
        }

        public async deletePokemon(id: number): Promise<QueryResult> {
            return this.db.deletePokemon(id);
        }

        public async getPokemonById(id: number): Promise<Pokemon> {
            const result = await this.db.getPokemonById(id);
            return Object.assign(new Pokemon(), result[0]);
        }

        public async getPokemonByName(name: string): Promise<Pokemon[]> {
            const result = await this.db.getPokemonByName(name);
            return result.map((pokemon) => Object.assign(new Pokemon(), pokemon));
        }
    }