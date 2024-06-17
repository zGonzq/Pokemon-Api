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
exports.eggGroupServices = void 0;
const egggroupDB_1 = require("../repository/egggroupDB");
class eggGroupServices {
    constructor() {
        this.db = new egggroupDB_1.egggroupRepository();
    }
    getAllEggGroup() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.getAllEggGroup();
        });
    }
    addEggGroup(egggroup) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.createEggGroup(egggroup);
        });
    }
    updateEggGroup(egggroup) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.updateEggGroup(egggroup);
        });
    }
    deleteEggGroup(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.deleteEggGroup(id);
        });
    }
    getEggGroupById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.db.getEggGroupById(id);
            return result;
        });
    }
    getEggGroupByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.db.getEggGroupByName(name);
            return result;
        });
    }
}
exports.eggGroupServices = eggGroupServices;
