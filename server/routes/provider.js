import { Router } from "express"
import { getAll } from "../controllers/provider.js";

export const providerRouter = Router()

providerRouter.get("/api/provider", getAll)