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
const eggGroupServices_1 = require("../services/eggGroupServices");
const router = (0, express_1.Router)();
const eggGroupService = new eggGroupServices_1.eggGroupServices();
router.get('/eggGroup/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allEggGroup = yield eggGroupService.getAllEggGroup();
    res.json(allEggGroup);
}));
router.get('/eggGroup/find/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const eggGroup = yield eggGroupService.getEggGroupById(parseInt(id));
    res.json(eggGroup);
}));
router.get('/eggGroup/find/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.params.name;
    const eggGroup = yield eggGroupService.getEggGroupByName(name);
    res.json(eggGroup);
}));
router.post('/eggGroup/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const eggGroup = req.body;
    const result = yield eggGroupService.addEggGroup(eggGroup);
    res.json(result);
}));
router.put('/eggGroup/update', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const eggGroup = req.body;
    const result = yield eggGroupService.updateEggGroup(eggGroup);
    res.json(result);
}));
router.delete('/eggGroup/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield eggGroupService.deleteEggGroup(parseInt(id));
    res.json(result);
}));
exports.default = router;
