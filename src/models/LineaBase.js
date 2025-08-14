const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const LineaBase = sequelize.define("LineaBase", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    usuarioId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    intencion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    desafios: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    beneficios: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    elementos: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    estados: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    tableName: "LineaBases",
    timestamps: true,
  });

  return LineaBase;
};
