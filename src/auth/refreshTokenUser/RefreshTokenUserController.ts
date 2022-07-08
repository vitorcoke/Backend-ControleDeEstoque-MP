import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import dayjs from "dayjs";
import { GenerateTokenProvide } from "../provider/GenerateTokenProvide";
import { GenerateRefreshTokenProvider } from "../provider/GenerateRefreshTokenProvider";

const prisma = new PrismaClient();

export const RefreshTokenUserController = async (
  req: Request,
  res: Response
) => {
  const { refresh_token } = req.body;

  const ValidationRefreshToken = await prisma.refreshToken.findUnique({
    where: {
      id: refresh_token,
    },
  });

  if (!ValidationRefreshToken) {
    return res.status(404).send("Token Invalido");
  }

  const refreshTokenExpired = dayjs().isAfter(
    dayjs.unix(ValidationRefreshToken.expiresIn)
  );
  const token = await GenerateTokenProvide(ValidationRefreshToken.userId);

  const user = await prisma.user.findUnique({
    where: {
      id: ValidationRefreshToken.userId,
    },
  });

  if (refreshTokenExpired) {
    await prisma.refreshToken.deleteMany({
      where: {
        userId: refresh_token.userId,
      },
    });
    const NewRefreshToken = await GenerateRefreshTokenProvider(
      ValidationRefreshToken.userId
    );

    user.password = undefined;

    return res.status(200).json({ token, NewRefreshToken, user });
  }

  return res.status(200).json({ token, user });
};
