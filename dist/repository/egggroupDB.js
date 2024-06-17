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
exports.egggroupRepository = void 0;
const DBConnect_1 = require("../DBConnect");
class egggroupRepository {
    constructor() {
        this.connection = new DBConnect_1.Conexion();
    }
    getEggGroupById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("SELECT * FROM egggroup WHERE IDegg = ?", [id]);
            return rows;
        });
    }
    getEggGroupByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("SELECT * FROM egggroup WHERE eggname = ?", [name]);
            return rows;
        });
    }
    getAllEggGroup() {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("SELECT * FROM egggroup");
            return rows;
        });
    }
    createEggGroup(egggroup) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("INSERT INTO egggroup (IDegg, eggname) VALUES (?, ?)", [egggroup.IDegg, egggroup.eggname]);
            return rows;
        });
    }
    updateEggGroup(egggroup) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("UPDATE egggroup SET eggname = ? WHERE IDegg = ?", [egggroup.eggname, egggroup.IDegg]);
            return rows;
        });
    }
    deleteEggGroup(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("DELETE FROM egggroup WHERE IDegg = ?", [id]);
            return rows;
        });
    }
}
exports.egggroupRepository = egggroupRepository;
