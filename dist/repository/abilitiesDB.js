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
exports.abilitiesRepository = void 0;
const DBConnect_1 = require("../DBConnect");
class abilitiesRepository {
    constructor() {
        this.connection = new DBConnect_1.Conexion();
    }
    getAbilitiesById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("SELECT * FROM abilities WHERE IDability = ?", [id]);
            return rows;
        });
    }
    getAbilitiesByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("SELECT * FROM abilities WHERE abilityname = ?", [name]);
            return rows;
        });
    }
    getAllAbilities() {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("SELECT * FROM abilities");
            return rows;
        });
    }
    createAbilities(abilities) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("INSERT INTO abilities (IDability, abilityname, abilitydescript) VALUES (?, ?, ?)", [abilities.IDability, abilities.abilityname, abilities.abilitydescript]);
            return rows;
        });
    }
    updateAbilities(abilities) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("UPDATE abilities SET abilityname = ?, abilitydescript = ? WHERE IDability = ?", [abilities.abilityname, abilities.abilitydescript, abilities.IDability]);
            return rows;
        });
    }
    deleteAbilities(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("DELETE FROM abilities WHERE IDability = ?", [id]);
            return rows;
        });
    }
}
exports.abilitiesRepository = abilitiesRepository;
