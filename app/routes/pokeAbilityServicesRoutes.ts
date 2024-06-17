import { Router } from "express";
import { pokeAbilityServices } from "../services/pokeAbilityServices";
import { iPokeAbility } from "../interface/iPokeAbility";

const router = Router();
const pokeAbilityService = new pokeAbilityServices();

router.get('/pokeAbility/list', async (req, res) => {
    const allPokeAbility = await pokeAbilityService.getAllPokeAbility();
    res.json(allPokeAbility);
});

router.get('/pokeAbility/find/:id', async (req, res) => {
    const id = req.params.id;
    const pokeAbility = await pokeAbilityService.getPokeAbilityById(parseInt(id));
    res.json(pokeAbility);
});

router.get('/pokeAbility/find/:slot', async (req, res) => {
    const slot = req.params.slot;
    const pokeAbility = await pokeAbilityService.getPokeAbilityBySlot(slot);
    res.json(pokeAbility);
});

router.post('/pokeAbility/add', async (req, res) => {
    const pokeAbility: iPokeAbility = req.body;
    const result = await pokeAbilityService.addPokeAbility(pokeAbility);
    res.json(result);
});

router.put('/pokeAbility/update', async (req, res) => {
    const pokeAbility: iPokeAbility = req.body;
    const result = await pokeAbilityService.updatePokeAbility(pokeAbility);
    res.json(result);
});

router.delete('/pokeAbility/delete/:id', async (req, res) => {
    const id = req.params.id;
    const result = await pokeAbilityService.deletePokeAbility(parseInt(id));
    res.json(result);
});

export default router;