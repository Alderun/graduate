import { Router } from "express"
import { createNews, deleteNews, editNews, getAll } from "../controllers/news.js";

export const newsRouter = Router()

newsRouter.post("/api/news", createNews)
newsRouter.delete("/api/news", deleteNews)
newsRouter.get("/api/news", getAll)
newsRouter.put("/api/news", editNews)