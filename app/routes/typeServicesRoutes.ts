import { Router } from "express";
import { typeServices } from "../services/typeServices";
import { iType } from "../interface/iType";

const router = Router();
const typeService = new typeServices();

router.get('/type/list', async (req, res) => {
    const allType = await typeService.getAllType();
    res.json(allType);
});

router.get('/type/find/:id', async (req, res) => {
    const id = req.params.id;
    const type = await typeService.getTypeById(parseInt(id));
    res.json(type);
});

router.get('/type/find/:name', async (req, res) => {
    const name = req.params.name;
    const type = await typeService.getTypeByName(name);
    res.json(type);
});

router.post('/type/add', async (req, res) => {
    const type: iType = req.body;
    const result = await typeService.addType(type);
    res.json(result);
});

router.put('/type/update', async (req, res) => {
    const type: iType = req.body;
    const result = await typeService.updateType(type);
    res.json(result);
});

router.delete('/type/delete/:id', async (req, res) => {
    const id = req.params.id;
    const result = await typeService.deleteType(parseInt(id));
    res.json(result);
});

export default router;