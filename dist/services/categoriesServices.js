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
exports.categoriesServices = void 0;
const categoriesDB_1 = require("../repository/categoriesDB");
class categoriesServices {
    constructor() {
        this.db = new categoriesDB_1.categoriesRepository();
    }
    getAllCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.getAllCategories();
        });
    }
    addCategories(categories) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.createCategories(categories);
        });
    }
    updateCategories(categories) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.updateCategories(categories);
        });
    }
    deleteCategories(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.deleteCategories(id);
        });
    }
    getCategoriesById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.db.getCategoriesById(id);
            return result;
        });
    }
    getCategoriesByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.db.getCategoriesByName(name);
            return result;
        });
    }
}
exports.categoriesServices = categoriesServices;
