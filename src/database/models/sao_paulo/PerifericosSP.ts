import { db } from "../../db"
import { DataTypes } from "sequelize";


export const PerifericosSPModel = db.define('perifericosSP', {
  data: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modelo:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  patrimonio:{
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},
{
  freezeTableName: true
}
)