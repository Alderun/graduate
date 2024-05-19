import { Router } from "express"
import { createTicket, deleteTicket, getAll } from "../controllers/ticket_reviews.js";

export const ticketRouter = Router()

ticketRouter.post("/api/ticket", createTicket)
ticketRouter.delete("/api/ticket", deleteTicket)
ticketRouter.get("/api/ticket", getAll)