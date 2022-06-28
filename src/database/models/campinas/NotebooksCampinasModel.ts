import { DataTypes } from "sequelize";
import { db } from "../../db";
import { UsersCampinasModel } from "./UsersCampinasModel";

export const NotebooksCampinasModel = db.define("notebooksCampinas", {
  data: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mac: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  serial: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  patrimonio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

UsersCampinasModel.hasMany(NotebooksCampinasModel);
NotebooksCampinasModel.belongsTo(UsersCampinasModel);
