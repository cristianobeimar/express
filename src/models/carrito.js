const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const cart = sequelize.define(
  "carrito",
  {
    id_carrito: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
  },
  {
    id_productos: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: []
     
    },
  },
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      ForeignKey: true
     
    }
  },
)
module.export(cart)