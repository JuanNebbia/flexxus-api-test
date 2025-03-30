import { Router } from "express";
import articlesRouter from "./articles.routes.js";
import authRouter from "./auth.routes.js";

const router = Router()

router.use('/auth', authRouter)
router.use('/articles', articlesRouter)

export default router;