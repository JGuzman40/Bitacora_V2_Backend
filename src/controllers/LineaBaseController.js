const {
  createLineaBaseService,
  getLineaBasePorUsuarioService,
  updateLineaBaseService,
} = require("../services/LineaBaseService");

const catchAsync = require("../utils/catchAsync");

// Crear nueva línea base
const createLineaBase = async (req, res) => {
  const usuarioId = req.body.usuarioId || req.body["usuarioId"];
  const { intencion, desafios, beneficios, elementos, estados } = req.body;

  const data = {
    usuarioId,
    intencion,
    desafios,
    beneficios,
    elementos,
    estados,
  };

  const newLineaBase = await createLineaBaseService(data);

  res.status(201).json({
    message: "Línea Base creada exitosamente",
    lineaBase: newLineaBase,
  });
};

// Obtener línea base por usuario
const getLineaBasePorUsuario = async (req, res) => {
  const { usuarioId } = req.params;
  try {
    const lineaBase = await getLineaBasePorUsuarioService(usuarioId);

    // Siempre respondemos 200
    return res.status(200).json({ lineaBase }); // será null si no existe
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener línea base" });
  }
};

// Actualizar línea base
const updateLineaBase = async (req, res) => {
  const { usuarioId } = req.params;
  const { intencion, desafios, beneficios, elementos, estados } = req.body;

  const updatedLineaBase = await updateLineaBaseService(usuarioId, {
    intencion,
    desafios,
    beneficios,
    elementos,
    estados,
  });

  res.status(200).json({
    message: "Línea Base actualizada exitosamente",
    lineaBase: updatedLineaBase,
  });
};

module.exports = {
  createLineaBase: catchAsync(createLineaBase),
  getLineaBasePorUsuario: catchAsync(getLineaBasePorUsuario),
  updateLineaBase: catchAsync(updateLineaBase),
};
