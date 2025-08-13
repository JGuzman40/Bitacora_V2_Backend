const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const routes = require("./routes");

const server = express();

// Middlewares básicos
server.use(cors({
  origin: ["http://localhost:5173","https://inquisitive-vacherin-c4a28e.netlify.app"]
}));
server.use(morgan("dev"));
server.use(express.json());

// Usar rutas
server.use("/api", routes); // Todas las rutas estarán bajo /api (por ejemplo: /api/user)

// Ruta simple para verificar que el servidor está funcionando
server.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

// Manejo básico de errores
server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ error: err.message });
});

module.exports = server;