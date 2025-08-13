module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("admin", "participante"),
      allowNull: false,
      defaultValue: "participante",
    },
    imageUrl: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
       adminId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
  });

  return User;
};
