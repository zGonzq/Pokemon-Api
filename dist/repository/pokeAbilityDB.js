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
exports.pokeAbilityRepository = void 0;
const DBConnect_1 = require("../DBConnect");
class pokeAbilityRepository {
    constructor() {
        this.connection = new DBConnect_1.Conexion();
    }
    getPokeAbilityById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("SELECT * FROM `poke-ability` WHERE IDpokeability = ?", [id]);
            return rows;
        });
    }
    getPokeAbilityBySlot(slot) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("SELECT * FROM `poke-ability` WHERE slot = ?", [slot]);
            return rows;
        });
    }
    getAllPokeAbility() {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("SELECT * FROM `poke-ability`");
            return rows;
        });
    }
    createPokeAbility(pokeability) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("INSERT INTO `poke-ability` (IDability, slot, IDpoke) VALUES (?, ?, ?)", [pokeability.IDability, pokeability.slot, pokeability.IDpoke]);
            return rows;
        });
    }
    updatePokeAbility(pokeability) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("UPDATE `poke-ability` SET abilityname = ?, IDpoke = ? WHERE IDpokeability = ?", [pokeability.slot, pokeability.IDpoke, pokeability.IDability]);
            return rows;
        });
    }
    deletePokeAbility(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("DELETE FROM `poke-ability` WHERE IDability = ?", [id]);
            return rows;
        });
    }
}
exports.pokeAbilityRepository = pokeAbilityRepository;
