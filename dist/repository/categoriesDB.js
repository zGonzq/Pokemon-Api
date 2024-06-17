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
exports.categoriesRepository = void 0;
const DBConnect_1 = require("../DBConnect");
class categoriesRepository {
    constructor() {
        this.connection = new DBConnect_1.Conexion();
    }
    getCategoriesById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("SELECT * FROM categories WHERE IDcat = ?", [id]);
            return rows;
        });
    }
    getCategoriesByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("SELECT * FROM categories WHERE category = ?", [name]);
            return rows;
        });
    }
    getAllCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("SELECT * FROM categories");
            return rows;
        });
    }
    createCategories(categories) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("INSERT INTO categories (IDcat, category) VALUES (?, ?)", [categories.IDcat, categories.category]);
            return rows;
        });
    }
    updateCategories(categories) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("UPDATE categories SET category = ? WHERE IDcat = ?", [categories.category, categories.IDcat]);
            return rows;
        });
    }
    deleteCategories(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.query("DELETE FROM categories WHERE IDcat = ?", [id]);
            return rows;
        });
    }
}
exports.categoriesRepository = categoriesRepository;
