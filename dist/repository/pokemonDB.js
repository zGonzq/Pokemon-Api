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
exports.PokemonRepository = void 0;
const DBConnect_1 = require("../DBConnect");
class PokemonRepository {
    constructor() {
        this.connection = new DBConnect_1.Conexion();
    }
    getPokemonById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("SELECT * FROM pokemon WHERE IDpoke = ?", [id]);
            return rows;
        });
    }
    getPokemonByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("SELECT * FROM pokemon WHERE pokename = ?", [name]);
            return rows;
        });
    }
    getAllPokemon() {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("SELECT * FROM pokemon");
            return rows;
        });
    }
    createPokemon(pokemon) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("INSERT INTO pokemon (IDpoke, pokename, HP, attack, defense, spattack, spdefense, speed, dualtype) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [pokemon.IDpoke, pokemon.pokename, pokemon.HP, pokemon.attack, pokemon.defense, pokemon.spattack, pokemon.spdefense, pokemon.speed, pokemon.dualtype]);
            return rows;
        });
    }
    updatePokemon(pokemon) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("UPDATE pokemon SET pokename = ?, HP = ?, attack = ?, defense = ?, spattack = ?, spdefense = ?, speed = ?, dualtype = ? WHERE IDpoke = ?", [pokemon.pokename, pokemon.HP, pokemon.attack, pokemon.defense, pokemon.spattack, pokemon.spdefense, pokemon.speed, pokemon.dualtype, pokemon.IDpoke]);
            return rows;
        });
    }
    deletePokemon(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("DELETE FROM pokemon WHERE IDpoke = ?", [id]);
            return rows;
        });
    }
}
exports.PokemonRepository = PokemonRepository;
