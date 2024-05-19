import {Router} from "express";
import {authUser, createUser} from "../controllers/auth.js";

export const authRouter = Router()

authRouter.post("/api/auth", authUser)
authRouter.post("/api/signup", createUser)