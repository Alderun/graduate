import { Router } from "express"
import { createReserved, getReserved, deleteReserved } from "../controllers/reserved.js";

export const reservedRouter = Router()

reservedRouter.post("/api/reserved", createReserved)
reservedRouter.get("/api/reserved", getReserved)
reservedRouter.delete("/api/reserved", deleteReserved)