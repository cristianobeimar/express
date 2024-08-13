const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const Factura = sequelize.define(
  "factura",
  {
    id_factura: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
  },
  {
    fecha_venta: {
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
module.export(Factura)