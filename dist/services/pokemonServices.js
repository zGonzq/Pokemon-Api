"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonServices = void 0;
const pokemonDB_1 = require("../repository/pokemonDB");
const pokemon_1 = require("../models/pokemon");
class PokemonServices {
    constructor() {
        this.db = new pokemonDB_1.PokemonRepository();
    }
    getAllPokemons() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.getAllPokemon();
        });
    }
    addPokemon(pokemon) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.createPokemon(pokemon);
        });
    }
    updatePokemon(pokemon) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.updatePokemon(pokemon);
        });
    }
    deletePokemon(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.deletePokemon(id);
        });
    }
    getPokemonById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.db.getPokemonById(id);
            return Object.assign(new pokemon_1.Pokemon(), result[0]);
        });
    }
    getPokemonByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.db.getPokemonByName(name);
            return result.map((pokemon) => Object.assign(new pokemon_1.Pokemon(), pokemon));
        });
    }
}
exports.PokemonServices = PokemonServices;
