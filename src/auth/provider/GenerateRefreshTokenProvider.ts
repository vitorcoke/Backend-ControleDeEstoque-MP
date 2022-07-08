import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";

const prisma = new PrismaClient();

export const GenerateRefreshTokenProvider = async (userId: number) => {
  const expiresIn = dayjs().add(15, "second").unix();

  const gererateToken = await prisma.refreshToken.create({
    data: {
      userId,
      expiresIn,
    },
  });

  return gererateToken;
};
