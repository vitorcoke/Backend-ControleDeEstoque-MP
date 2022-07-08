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
router.get("/register/:id", getByIdUseregister);
router.post("/register", createUserRegister);
router.put("/register/:id", updateUserRegister);
router.delete("/register/:id", deleteUserRegister);
router.post("/login", validationUser);
router.post("/refresh-token", RefreshTokenUserController);
router.get("/curso", AuthValidationToken, (req: CustomRequest, res) => {
  res.send({ message: "Token valido", user: req.user });
});
export { router };
