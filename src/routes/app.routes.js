import { Router } from "express";
import articulosRouter from "./articulos.routes.js";
import authRouter from "./auth.routes.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router()

router.use('/articulos', authMiddleware, articulosRouter)
router.use('/auth', authRouter)

export default router;