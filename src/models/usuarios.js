const { types } = require("pg");
const { sequelize } = require("../config/database");
const { DataTypes } = require("sequelize");

const usuario = sequelize.define(
  "usuarios",
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
  },
  {
    nombre_completo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: false,
    },
  },
  {
    documento: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: false,
     
    }
  },
  {
    telefono: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: false
    },
  },
  {
    direccion: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: false
    },
  },
  {
    correo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: false,
    },
  },
  {
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: false,
      defaultValue: DataTypes.NOW
    },
  },
  {
    tablename: "usuarios",
    timestam: false
  }

);

module.export(usuario)