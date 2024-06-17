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
const express_1 = require("express");
const categoriesServices_1 = require("../services/categoriesServices");
const router = (0, express_1.Router)();
const categoriesService = new categoriesServices_1.categoriesServices();
router.get('/categories/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allCategories = yield categoriesService.getAllCategories();
    res.json(allCategories);
}));
router.get('/categories/find/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const categories = yield categoriesService.getCategoriesById(parseInt(id));
    res.json(categories);
}));
router.get('/categories/find/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.params.name;
    const categories = yield categoriesService.getCategoriesByName(name);
    res.json(categories);
}));
router.post('/categories/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = req.body;
    const result = yield categoriesService.addCategories(categories);
    res.json(result);
}));
router.put('/categories/update', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = req.body;
    const result = yield categoriesService.updateCategories(categories);
    res.json(result);
}));
router.delete('/categories/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield categoriesService.deleteCategories(parseInt(id));
    res.json(result);
}));
exports.default = router;
