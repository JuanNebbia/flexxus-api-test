import { Router } from "express";
import * as articulosController from "../controllers/articulos.controller.js";

const router = Router()

router.get('/', articulosController.getAllArticulos)
router.get('/:id', articulosController.getArticuloById)
router.post('/', articulosController.createArticulo)
router.patch('/:id', articulosController.updateArticulo)
router.delete('/:id', articulosController.deleteArticulo)

export default router;
