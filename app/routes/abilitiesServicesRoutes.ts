import { Router } from "express";
import { abilitiesServices } from "../services/abilitiesServices";
import { iAbilities } from "../interface/iAbilities";

const router = Router();
const abilitiesService = new abilitiesServices();

router.get('/abilities/list', async (req, res) => {
    const allAbilities = await abilitiesService.getAllAbilities();
    res.json(allAbilities);
});

router.get('/abilities/find/:id', async (req, res) => {
    const id = req.params.id;
    const abilities = await abilitiesService.getAbilitiesById(parseInt(id));
    res.json(abilities);
});

router.post('/abilities/add', async (req, res) => {
    const abilities: iAbilities = req.body;
    const result = await abilitiesService.addAbilities(abilities);
    res.json(result);
});

router.put('/abilities/update', async (req, res) => {
    const abilities: iAbilities = req.body;
    const result = await abilitiesService.updateAbilities(abilities);
    res.json(result);
});

router.delete('/abilities/delete/:id', async (req, res) => {
    const id = req.params.id;
    const result = await abilitiesService.deleteAbilities(parseInt(id));
    res.json(result);
});

export default router;