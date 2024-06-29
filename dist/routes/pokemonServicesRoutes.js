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
const express_1 = require("express");
const pokemonServices_1 = require("../services/pokemonServices");
const router = (0, express_1.Router)();
const pokemonServices = new pokemonServices_1.PokemonServices();
router.get('/pokemon/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allPokemon = yield pokemonServices.getAllPokemons();
    res.json(allPokemon);
}));
router.get('/pokemon/find/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const pokemon = yield pokemonServices.getPokemonById(parseInt(id));
    res.json(pokemon);
}));
router.post('/pokemon/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pokemon = req.body;
    const result = yield pokemonServices.addPokemon(pokemon);
    res.json(result);
}));
router.put('/pokemon/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pokemon = req.body;
    const result = yield pokemonServices.updatePokemon(pokemon);
    res.json(result);
}));
router.delete('/pokemon/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield pokemonServices.deletePokemon(parseInt(id));
    res.json(result);
}));
exports.default = router;
