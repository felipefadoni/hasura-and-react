import { Router } from "express";
import authenticatedUserController from "./authenticate-user";
import createUserController from "./create-user";

const userRouter = Router();

userRouter
  .post("/", createUserController)
  .post("/authenticate", authenticatedUserController);

export default userRouter;
