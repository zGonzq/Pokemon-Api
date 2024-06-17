import { Router } from "express";
import { movesServices } from "../services/movesServices";
import { moves } from "../models/moves";

const router = Router();
const movesService = new movesServices();

router.get('/moves/list', async (req, res) => {
    const allMoves = await movesService.getAllMoves();
    res.json(allMoves);
});

router.get('/moves/find/:id', async (req, res) => {
    const id = req.params.id;
    const moves = await movesService.getMovesById(parseInt(id));
    res.json(moves);
});

router.post('/moves/add', async (req, res) => {
    const moves: moves = req.body;
    const result = await movesService.addMoves(moves);
    res.json(result);
});

router.put('/moves/update', async (req, res) => {
    const moves: moves = req.body;
    const result = await movesService.updateMoves(moves);
    res.json(result);
});

router.delete('/moves/delete/:id', async (req, res) => {
    const id = req.params.id;
    const result = await movesService.deleteMoves(parseInt(id));
    res.json(result);
});

export default router;