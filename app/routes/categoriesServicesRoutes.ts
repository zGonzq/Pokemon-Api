import { Router } from "express";
import { categoriesServices } from "../services/categoriesServices";
import { iCategorias } from "../interface/iCategories";

const router = Router();
const categoriesService = new categoriesServices();

router.get('/categories/list', async (req, res) => {
    const allCategories = await categoriesService.getAllCategories();
    res.json(allCategories);
});

router.get('/categories/find/:id', async (req, res) => {
    const id = req.params.id;
    const categories = await categoriesService.getCategoriesById(parseInt(id));
    res.json(categories);
});

router.get('/categories/find/:name', async (req, res) => {
    const name = req.params.name;
    const categories = await categoriesService.getCategoriesByName(name);
    res.json(categories);
});

router.post('/categories/add', async (req, res) => {
    const categories: iCategorias = req.body;
    const result = await categoriesService.addCategories(categories);
    res.json(result);
});

router.put('/categories/update', async (req, res) => {
    const categories: iCategorias = req.body;
    const result = await categoriesService.updateCategories(categories);
    res.json(result);
});

router.delete('/categories/delete/:id', async (req, res) => {
    const id = req.params.id;
    const result = await categoriesService.deleteCategories(parseInt(id));
    res.json(result);
});

export default router;