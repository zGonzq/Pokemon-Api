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
const movesServices_1 = require("../services/movesServices");
const router = (0, express_1.Router)();
const movesService = new movesServices_1.movesServices();
router.get('/moves/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allMoves = yield movesService.getAllMoves();
    res.json(allMoves);
}));
router.get('/moves/find/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const moves = yield movesService.getMovesById(parseInt(id));
    res.json(moves);
}));
router.post('/moves/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const moves = req.body;
    const result = yield movesService.addMoves(moves);
    res.json(result);
}));
router.put('/moves/update', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const moves = req.body;
    const result = yield movesService.updateMoves(moves);
    res.json(result);
}));
router.delete('/moves/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield movesService.deleteMoves(parseInt(id));
    res.json(result);
}));
exports.default = router;
