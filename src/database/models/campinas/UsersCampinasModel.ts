import { DataTypes } from "sequelize";
import { db } from "../../db";

export const UsersCampinasModel = db.define("usersCampinas", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  departament: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});