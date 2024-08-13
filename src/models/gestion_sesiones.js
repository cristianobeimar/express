const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const sesiones = sequelize.define(
  "gestion_sesiones",
  {
    nombre: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
  },
  {
    nombre_usuario: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: []
     
    },
  },
  {
    correo_electronico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      ForeignKey: true
     
    }
  },
  {
    contraseña: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      ForeignKey: true
     
    }
  },
)
module.export(sesiones)