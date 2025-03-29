import { Router } from "express";
import articulosRouter from "./articulos.routes.js";

const router = Router()

router.use('/articulos', articulosRouter)

export default router;
