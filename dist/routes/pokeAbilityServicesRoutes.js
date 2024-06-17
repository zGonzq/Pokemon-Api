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
const pokeAbilityServices_1 = require("../services/pokeAbilityServices");
const router = (0, express_1.Router)();
const pokeAbilityService = new pokeAbilityServices_1.pokeAbilityServices();
router.get('/pokeAbility/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allPokeAbility = yield pokeAbilityService.getAllPokeAbility();
    res.json(allPokeAbility);
}));
router.get('/pokeAbility/find/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const pokeAbility = yield pokeAbilityService.getPokeAbilityById(parseInt(id));
    res.json(pokeAbility);
}));
router.get('/pokeAbility/find/:slot', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const slot = req.params.slot;
    const pokeAbility = yield pokeAbilityService.getPokeAbilityBySlot(slot);
    res.json(pokeAbility);
}));
router.post('/pokeAbility/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pokeAbility = req.body;
    const result = yield pokeAbilityService.addPokeAbility(pokeAbility);
    res.json(result);
}));
router.put('/pokeAbility/update', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pokeAbility = req.body;
    const result = yield pokeAbilityService.updatePokeAbility(pokeAbility);
    res.json(result);
}));
router.delete('/pokeAbility/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield pokeAbilityService.deletePokeAbility(parseInt(id));
    res.json(result);
}));
exports.default = router;
