import { Router } from "express";
import articlesRouter from "./articles.routes.js";
import authRouter from "./auth.routes.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router()

router.use('/auth', authRouter)
router.use('/articles', authMiddleware, articlesRouter)

export default router;