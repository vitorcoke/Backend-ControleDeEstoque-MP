import express from "express";
import {
  createUserRegister,
  deleteUserRegister,
  getByIdUseregister,
  getUsersRegister,
  updateUserRegister,
} from "./controllers/users/UserController";
import {
  AuthValidationToken,
  CustomRequest,
} from "./auth/middleware/AuthValidationToken";
import { validationUser } from "./auth/AuthController";
import { RefreshTokenUserController } from "./auth/refreshTokenUser/RefreshTokenUserController";

const router = express.Router();

router.get("/register", AuthValidationToken, getUsersRegister);
router.get("/register/:id", AuthValidationToken, getByIdUseregister);
router.post("/register", createUserRegister);
router.put("/register/:id", AuthValidationToken, updateUserRegister);
router.delete("/register/:id", AuthValidationToken, deleteUserRegister);
router.post("/login", validationUser);
router.post("/refresh-token", RefreshTokenUserController);
router.get("/bytoken", AuthValidationToken);
export { router };
