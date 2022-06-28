import { DataTypes } from "sequelize";
import { db } from "../../db";

export const UsersSPModel = db.define("userSP", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  departament: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
  {
    freezeTableName: true
  }
)

