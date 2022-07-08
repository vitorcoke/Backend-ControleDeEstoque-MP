import jwt from "jsonwebtoken";
import { jwtConstants } from "../config/jwt.config";
import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface CustomRequest extends Request {
  user: {};
}

type decodedToken = {
  user: string;
};

export const AuthValidationToken = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const Authtoken = req.headers.authorization;

  if (!Authtoken) {
    return res.status(404).json("Token inexistente para validação");
  }

  const [, token] = Authtoken.split(" ");

  jwt.verify(token, jwtConstants.secret, async (err, decoded: decodedToken) => {
    if (err) {
      return res.status(401).json("Token invalido");
    }

    const user = await prisma.user.findUnique({
      where: { id: Number(decoded.user) },
    });

    user.password = undefined;

    req.user = user;
    return next();
  });
};
