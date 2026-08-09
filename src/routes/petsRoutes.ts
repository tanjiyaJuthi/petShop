import express from "express"
import type {Router} from "express"
import { getPetById, getPets } from "../controllers/petcontroller"
import { validateNumericId } from "../middlewares/petMiddleware"

export const petRouter:Router = express.Router()

petRouter.get(
    "/",
    getPets
)

petRouter.get(
    '/:id',
    validateNumericId,
    getPetById
)