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
const abilitiesServices_1 = require("../services/abilitiesServices");
const router = (0, express_1.Router)();
const abilitiesService = new abilitiesServices_1.abilitiesServices();
router.get('/abilities/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allAbilities = yield abilitiesService.getAllAbilities();
    res.json(allAbilities);
}));
router.get('/abilities/find/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const abilities = yield abilitiesService.getAbilitiesById(parseInt(id));
    res.json(abilities);
}));
router.post('/abilities/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const abilities = req.body;
    const result = yield abilitiesService.addAbilities(abilities);
    res.json(result);
}));
router.put('/abilities/update', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const abilities = req.body;
    const result = yield abilitiesService.updateAbilities(abilities);
    res.json(result);
}));
router.delete('/abilities/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield abilitiesService.deleteAbilities(parseInt(id));
    res.json(result);
}));
exports.default = router;
