import { DataTypes } from "sequelize";
import { db } from "../../db";
import { PerifericosSPModel } from "./PerifericosSP";
import { UsersSPModel } from "./UsersSPModel";

export const NotebooksSPModel = db.define(
  "notebooksSP",
  {
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
      unique: true,
    },
  },
  {
    freezeTableName: true,
  }
);

UsersSPModel.hasMany(NotebooksSPModel);
NotebooksSPModel.belongsTo(UsersSPModel);
UsersSPModel.hasMany(PerifericosSPModel);
PerifericosSPModel.belongsTo(UsersSPModel);
