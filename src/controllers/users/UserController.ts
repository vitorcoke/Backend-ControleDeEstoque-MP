import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const getUsersRegister = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      email: true,
    },
  });

  users.length > 0 ? res.status(200).json(users) : res.status(204).json({});
};

export const getByIdUseregister = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });

  user ? res.status(200).json(user) : res.status(204).json({});
};

export const createUserRegister = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;

  if (!(username || password || email)) {
    res.status(400).send("preencha todos os campos");
  }

  //verificar se não existe usuario criado
  const oldUser = await prisma.user.findUnique({
    where: { username },
  });

  if (oldUser) {
    res.status(409).send("Usuario existente");
  }

  //criptografa a senha
  let encryptedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      username,
      password: encryptedPassword,
      email,
    },
  });
  return res.status(201).json(user);
};

export const updateUserRegister = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { username, password, email } = req.body;
    const user = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        username,
        password,
        email,
      },
    });

    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserRegister = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });

    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};
