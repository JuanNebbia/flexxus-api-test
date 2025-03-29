import { Router } from "express";
import articulosRouter from "./articulos.routes.js";
import authRouter from "./auth.routes.js";

const router = Router()

router.use('/articulos', articulosRouter)
router.use('/auth', authRouter)

export default router;
