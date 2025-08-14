const { LineaBase } = require("../db");

// Crear o actualizar línea base
const createLineaBaseService = async ({ usuarioId, intencion, desafios, beneficios, elementos, estados }) => {
  const nuevaLineaBase = await LineaBase.create({
    usuarioId,
    intencion,
    desafios,
    beneficios,
    elementos,
    estados,
  });
  return nuevaLineaBase;
};

// Obtener línea base por usuario
const getLineaBasePorUsuarioService = async (usuarioId) => {
  const lineaBase = await LineaBase.findOne({
    where: { usuarioId, isActive: true },
  });
  return lineaBase || null;
};

// Actualizar línea base
const updateLineaBaseService = async (usuarioId, data) => {
  const lineaBase = await LineaBase.findOne({
    where: { usuarioId, isActive: true },
  });

  if (!lineaBase) throw new Error("Línea base no encontrada");

  const { intencion, desafios, beneficios, elementos, estados } = data;

  lineaBase.intencion = intencion ?? lineaBase.intencion;
  lineaBase.desafios = desafios ?? lineaBase.desafios;
  lineaBase.beneficios = beneficios ?? lineaBase.beneficios;
  lineaBase.elementos = elementos ?? lineaBase.elementos;
  lineaBase.estados = estados ?? lineaBase.estados;

  await lineaBase.save();
  return lineaBase;
};

module.exports = {
  createLineaBaseService,
  getLineaBasePorUsuarioService,
  updateLineaBaseService,
};
