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
exports.typeRepository = void 0;
const DBConnect_1 = require("../DBConnect");
class typeRepository {
    constructor() {
        this.connection = new DBConnect_1.Conexion();
    }
    getTypeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("SELECT * FROM type WHERE IDtype = ?", [id]);
            return rows;
        });
    }
    getTypeByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("SELECT * FROM type WHERE typename = ?", [name]);
            return rows;
        });
    }
    getAllType() {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("SELECT * FROM type");
            return rows;
        });
    }
    createType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("INSERT INTO type (IDtype, typename) VALUES (?, ?)", [type.IDtype, type.typename]);
            return rows;
        });
    }
    updateType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("UPDATE type SET typename = ? WHERE IDtype = ?", [type.typename, type.IDtype]);
            return rows;
        });
    }
    deleteType(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("DELETE FROM type WHERE IDtype = ?", [id]);
            return rows;
        });
    }
}
exports.typeRepository = typeRepository;
