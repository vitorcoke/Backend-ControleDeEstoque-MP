import jwt from "jsonwebtoken";
import { jwtConstants } from "../config/jwt.config";

export const GenerateTokenProvide = async (payload: Number) => {
  const token = jwt.sign({ user: payload }, jwtConstants.secret, {
    expiresIn: "100s",
  });

  return token;
};
