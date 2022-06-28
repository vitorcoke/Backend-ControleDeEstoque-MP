import { Request, Response } from "express";
import { NotebooksSPModel } from "../../database/models/sao_paulo/NotebooksSPModel";

class NotebooksSPController {
  async findAll(req: Request, res: Response) {
    const notebooks = await NotebooksSPModel.findAll();

    return notebooks.length > 0
      ? res.status(200).json(notebooks)
      : res.status(204).json({});
  }
  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const notebook = await NotebooksSPModel.findOne({
      where: {
        id: id,
      },
    });

    return notebook ? res.status(200).json(notebook) : res.status(204).json({});
  }

  async create(req: Request, res: Response) {
    try {
      const { data, marca, modelo, mac, serial, patrimonio, userSPId } =
        req.body;
      const notebooks = await NotebooksSPModel.create({
        data,
        marca,
        modelo,
        mac,
        serial,
        patrimonio,
        userSPId,
      });
      return res.status(201).json(notebooks);
    } catch (error) {
      console.log(error.sqlMessage);
    }
  }
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { data, marca, modelo, mac, serial, patrimonio, userSPId } = req.body;
    const notebooks = await NotebooksSPModel.update(
      {
        data,
        marca,
        modelo,
        mac,
        serial,
        patrimonio,
        userSPId,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return notebooks
      ? res.status(200).json(notebooks)
      : res.status(204).json({});
  }
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await NotebooksSPModel.destroy({
      where: {
        id: id,
      },
    });

    return res.status(204).send();
  }
}

export default new NotebooksSPController();
