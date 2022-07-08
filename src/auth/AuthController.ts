import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import { GenerateRefreshTokenProvider } from "./provider/GenerateRefreshTokenProvider";
import { GenerateTokenProvide } from "./provider/GenerateTokenProvide";

const prisma = new PrismaClient();

export const validationUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { username },
  });

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (user && isValidPassword) {
    const token = await GenerateTokenProvide(user.id);

    const RefreshToken = await GenerateRefreshTokenProvider(user.id);

    user.password = undefined;

    return res.status(200).json({ user, token, RefreshToken });
  }

  return res.status(400).send("Credenciais Invalidas");
};
