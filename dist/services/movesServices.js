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
exports.movesServices = void 0;
const movesDB_1 = require("../repository/movesDB");
class movesServices {
    constructor() {
        this.db = new movesDB_1.movesRepository();
    }
    getAllMoves() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.getAllMoves();
        });
    }
    addMoves(moves) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.createMoves(moves);
        });
    }
    updateMoves(moves) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.updateMoves(moves);
        });
    }
    deleteMoves(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.deleteMoves(id);
        });
    }
    getMovesById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.db.getMovesById(id);
            return result;
        });
    }
    getMovesByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.db.getMovesByName(name);
            return result;
        });
    }
}
exports.movesServices = movesServices;
