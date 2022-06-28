import { Request, Response } from "express";
import { NotebooksCampinasModel } from "../../database/models/campinas/NotebooksCampinasModel";

class NotebooksCampinasController {
  async findAll(req: Request, res: Response) {
    const notebooks = await NotebooksCampinasModel.findAll();

    return notebooks.length > 0
      ? res.status(200).json(notebooks)
      : res.status(204).json({});
  }
  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const notebook = await NotebooksCampinasModel.findOne({
      where: {
        id: id,
      },
    });

    return notebook ? res.status(200).json(notebook) : res.status(204).json({});
  }

  async create(req: Request, res: Response) {
    const { data, marca, modelo, mac, serial, patrimonio, userCampinasId } =
      req.body;
    const notebooks = await NotebooksCampinasModel.create({
      data,
      marca,
      modelo,
      mac,
      serial,
      patrimonio,
      userCampinasId,
    });

    return res.status(201).json(notebooks);
  }
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { data, marca, modelo, mac, serial, patrimonio, userCampinasId } =
      req.body;
    const notebooks = await NotebooksCampinasModel.update(
      {
        data,
        marca,
        modelo,
        mac,
        serial,
        patrimonio,
        userCampinasId,
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
    await NotebooksCampinasModel.destroy({
      where: {
        id: id,
      },
    });

    return res.status(204).send();
  }
}

export default new NotebooksCampinasController();
