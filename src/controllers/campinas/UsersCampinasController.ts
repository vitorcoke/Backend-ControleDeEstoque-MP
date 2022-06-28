import { Request, Response } from 'express';
import { NotebooksCampinasModel } from '../../database/models/campinas/NotebooksCampinasModel';
import {UsersCampinasModel} from '../../database/models/campinas/UsersCampinasModel';



class UsersCampinasController {

  async findAll(req: Request, res: Response) {
    const users = await UsersCampinasModel.findAll({include: NotebooksCampinasModel});
    return  res.status(200).json(users);
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const users = await UsersCampinasModel.findAll({
      where: {
        id: id
      },
      include: NotebooksCampinasModel
    })
    

    return users.length > 0 ? res.status(200).json(users) : res.status(204).json({});
  }

  async create(req: Request, res: Response) {
    const { name, departament} = req.body;
    const users = await UsersCampinasModel.create({
      name,
      departament
    });

    return res.status(201).json(users);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, departament } = req.body;
    const users = await UsersCampinasModel.update({
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
    await UsersCampinasModel.destroy({
      where: { id: id }
    });

    return res.status(204).send();
  }
}

export default new UsersCampinasController();