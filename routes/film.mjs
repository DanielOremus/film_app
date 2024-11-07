import { Router } from "express"
import FilmController from "../controllers/FilmController.mjs"

const router = Router()

router.get("/", FilmController.getList)

export default router
