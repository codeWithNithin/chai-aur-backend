import { Router } from "express";
import { registerUser } from "../controllers/user.controllers";

const userRouter = Router();

userRouter.post("/register", registerUser);

export default userRouter
