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
exports.movesRepository = void 0;
const DBConnect_1 = require("../DBConnect");
class movesRepository {
    constructor() {
        this.connection = new DBConnect_1.Conexion();
    }
    getMovesById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("SELECT * FROM moves WHERE IDmove = ?", [id]);
            return rows;
        });
    }
    getMovesByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("SELECT * FROM moves WHERE movename = ?", [name]);
            return rows;
        });
    }
    getAllMoves() {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("SELECT * FROM moves");
            return rows;
        });
    }
    createMoves(moves) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("INSERT INTO moves (IDmove, movename, power, accuracy, PP, effect) VALUES (?, ?, ?, ?, ?, ?, ?)", [moves.IDmove, moves.movename, moves.power, moves.accuracy, moves.PP, moves.effect]);
            return rows;
        });
    }
    updateMoves(moves) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("UPDATE moves SET movename = ?, power = ?, accuracy = ?, PP = ?, effect = ? WHERE IDmove = ?", [moves.movename, moves.power, moves.accuracy, moves.PP, moves.effect, moves.IDmove]);
            return rows;
        });
    }
    deleteMoves(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("DELETE FROM moves WHERE IDmove = ?", [id]);
            return rows;
        });
    }
}
exports.movesRepository = movesRepository;
