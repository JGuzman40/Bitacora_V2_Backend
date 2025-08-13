require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
const fs = require("fs");
const path = require("path");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, NODE_ENV } = process.env;

const isProduction = NODE_ENV === "production";

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    dialect: "postgres",
    logging: false,
    dialectOptions: isProduction
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false, // en producción mejor true, pero false si tu proveedor no valida CA
          },
        }
      : {}, // en local sin SSL
  }
);

// Cargar modelos desde la carpeta /models
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter((file) => file.endsWith(".js") && !file.startsWith("."))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Inyectar sequelize en todos los modelos
modelDefiners.forEach((model) => model(sequelize, DataTypes));

// Relacionar modelos
const { User, Reflexion } = sequelize.models;

// Asociación autorreferenciada
User.hasMany(User, { foreignKey: "adminId", as: "participantes" });
User.belongsTo(User, { foreignKey: "adminId", as: "admin" });

// Usuario y Reflexiones
User.hasMany(Reflexion, { foreignKey: "usuarioId", as: "reflexiones" });
Reflexion.belongsTo(User, { foreignKey: "usuarioId", as: "usuario" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
