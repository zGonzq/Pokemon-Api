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
const typeServices_1 = require("../services/typeServices");
const router = (0, express_1.Router)();
const typeService = new typeServices_1.typeServices();
router.get('/type/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allType = yield typeService.getAllType();
    res.json(allType);
}));
router.get('/type/find/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const type = yield typeService.getTypeById(parseInt(id));
    res.json(type);
}));
router.get('/type/find/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.params.name;
    const type = yield typeService.getTypeByName(name);
    res.json(type);
}));
router.post('/type/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const type = req.body;
    const result = yield typeService.addType(type);
    res.json(result);
}));
router.put('/type/update', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const type = req.body;
    const result = yield typeService.updateType(type);
    res.json(result);
}));
router.delete('/type/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield typeService.deleteType(parseInt(id));
    res.json(result);
}));
exports.default = router;
