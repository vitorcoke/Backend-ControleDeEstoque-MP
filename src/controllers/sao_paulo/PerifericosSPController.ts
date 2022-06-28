import { PerifericosSPModel } from "../../database/models/sao_paulo/PerifericosSP";
import {Request, Response} from "express";

class PerifericosSPController{

  async findAll(req: Request, res: Response) {
    const perifericos = await PerifericosSPModel.findAll();
    return perifericos.length > 0 ? res.status(200).json(perifericos): res.status(204).json({});
  }
  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const periferico = await PerifericosSPModel.findOne({
      where: {
        id: id
      },
    });
    return periferico ? res.status(200).json(periferico) : res.status(204).json({});
  }
  async create(req: Request, res: Response) {
    const { data, marca, modelo, mac, serial, patrimonio, userSPId } = req.body;
    const periferico = await PerifericosSPModel.create({
      data,
      marca,
      modelo,
      mac,
      serial,
      patrimonio,
      userSPId
    });
    return res.status(201).json(periferico);
  }
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { data, marca, modelo, mac, serial, patrimonio,userSPId } = req.body;
    const periferico = await PerifericosSPModel.update({
      data,
      marca,
      modelo,
      mac,
      serial,
      patrimonio,
      userSPId
    },{
      where: {
        id: id
      }
    });
    return periferico ? res.status(200).json(periferico) : res.status(204).json({});
  }
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await PerifericosSPModel.destroy({
      where: {
        id: id
      }
    });
    return res.status(200).json({});
  }
}

export default new PerifericosSPController();