module.exports = (sequelize, DataTypes) => {
  const Reflexion = sequelize.define("Reflexion", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    audio_url: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    texto: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    fecha: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    compartirConTerapeuta: {
      type: DataTypes.BOOLEAN,
      defaultValue: false, // por defecto no se comparte
    },
  });

  return Reflexion;
};
