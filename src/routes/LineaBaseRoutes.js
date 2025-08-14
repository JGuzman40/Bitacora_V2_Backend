const { Router } = require("express");
const lineaBaseController = require("../controllers/LineaBaseController");

const router = Router();

router.post("/", lineaBaseController.createLineaBase);
router.get("/usuario/:usuarioId", lineaBaseController.getLineaBasePorUsuario);
router.put("/usuario/:usuarioId", lineaBaseController.updateLineaBase);

module.exports = router;
