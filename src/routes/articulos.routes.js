import { Router } from "express";
import * as articulosController from "../controllers/articulos.controller.js";
import { validateCreateArticulo, validateDeleteArticulo, validateGetArticulo, validateGetArticulos, validateUpdateArticulo } from "../middlewares/validation.middleware.js";

const router = Router()

router.get('/', validateGetArticulos, articulosController.getAllArticulos)
router.get('/:id', validateGetArticulo, articulosController.getArticuloById)
router.post('/', validateCreateArticulo, articulosController.createArticulo)
router.patch('/:id', validateUpdateArticulo, articulosController.updateArticulo)
router.delete('/:id', validateDeleteArticulo, articulosController.deleteArticulo)

export default router;
