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
exports.abilitiesServices = void 0;
const abilitiesDB_1 = require("../repository/abilitiesDB");
class abilitiesServices {
    constructor() {
        this.db = new abilitiesDB_1.abilitiesRepository();
    }
    getAllAbilities() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.getAllAbilities();
        });
    }
    addAbilities(abilities) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.createAbilities(abilities);
        });
    }
    updateAbilities(abilities) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.updateAbilities(abilities);
        });
    }
    deleteAbilities(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.deleteAbilities(id);
        });
    }
    getAbilitiesById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.db.getAbilitiesById(id);
            return result;
        });
    }
    getAbilitiesByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.db.getAbilitiesByName(name);
            return result;
        });
    }
}
exports.abilitiesServices = abilitiesServices;
