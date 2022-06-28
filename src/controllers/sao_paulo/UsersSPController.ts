import { Request, Response } from 'express';
import { NotebooksSPModel } from '../../database/models/sao_paulo/NotebooksSPModel';

import { UsersSPModel } from '../../database/models/sao_paulo/UsersSPModel';



class UsersSPController {

  async findAll(req: Request, res: Response) {
    const users = await UsersSPModel.findAll({include: NotebooksSPModel});
    return  res.status(200).json(users);
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const users = await UsersSPModel.findAll({
      where: {
        id: id
      },
      include: NotebooksSPModel
    })
    

    return users.length > 0 ? res.status(200).json(users) : res.status(204).json({});
  }

  async create(req: Request, res: Response) {
    const { name, departament} = req.body;
    const users = await UsersSPModel.create({
      name,
      departament
    });

    return res.status(201).json(users);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, departament } = req.body;
    const users = await UsersSPModel.update({
      name,
      departament
    }, {
      where: {
        id: id
      }
    });

    return users ? res.status(200).json(users) : res.status(204).json({});
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await UsersSPModel.destroy({
      where: { id: id }
    });

    return res.status(204).send();
  }
}

export default new UsersSPController();