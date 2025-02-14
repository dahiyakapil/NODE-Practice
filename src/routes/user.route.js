import express from "express";
import { userController } from "../controllers/user.controller.js";
import { authMiddleware, isAuthorized } from "../middlewares/authMiddleware.js";

const userRouter = express.Router();

userRouter.put("/update/:id", authMiddleware, userController.updateUser);
userRouter.put("/self-update", authMiddleware, isAuthorized("admin") ,userController.selfUpdate);


export default userRouter;



