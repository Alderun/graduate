import { Router } from "express"
import { createReviews, getAll } from "../controllers/reviews.js";

export const reviewsRouter = Router()

reviewsRouter.post("/api/reviews", createReviews)
reviewsRouter.get("/api/reviews", getAll)