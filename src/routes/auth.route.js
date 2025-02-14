import express from "express";
import { authController } from "../controllers/auth.controller.js";
const authRouter = express.Router();

authRouter.post("/register", authController.createUser);
authRouter.post("/login", authController.loginUser)

export default authRouter;