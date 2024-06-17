import { Router } from "express";
import { eggGroupServices } from "../services/eggGroupServices";
import { iEggGroup } from "../interface/iEggGroup";

const router = Router();
const eggGroupService = new eggGroupServices();

router.get('/eggGroup/list', async (req, res) => {
    const allEggGroup = await eggGroupService.getAllEggGroup();
    res.json(allEggGroup);
});

router.get('/eggGroup/find/:id', async (req, res) => {
    const id = req.params.id;
    const eggGroup = await eggGroupService.getEggGroupById(parseInt(id));
    res.json(eggGroup);
});

router.get('/eggGroup/find/:name', async (req, res) => {
    const name = req.params.name;
    const eggGroup = await eggGroupService.getEggGroupByName(name);
    res.json(eggGroup);
});

router.post('/eggGroup/add', async (req, res) => {
    const eggGroup: iEggGroup = req.body;
    const result = await eggGroupService.addEggGroup(eggGroup);
    res.json(result);
});

router.put('/eggGroup/update', async (req, res) => {
    const eggGroup: iEggGroup = req.body;
    const result = await eggGroupService.updateEggGroup(eggGroup);
    res.json(result);
});

router.delete('/eggGroup/delete/:id', async (req, res) => {
    const id = req.params.id;
    const result = await eggGroupService.deleteEggGroup(parseInt(id));
    res.json(result);
});

export default router;