const { Router } = require("express");
const usersController = require("../controllers/UserController");

const router = Router();

router.post("/", usersController.createUser); // Crear usuario
router.get("/", usersController.getAllUsers); // Obtener todos los usuarios
router.get("/admin/:adminId/participantes", usersController.getParticipantesByAdmin); // Obtener participantes de un admin
router.get("/:id", usersController.getUserById); // Obtener un usuario por ID
router.put("/:id", usersController.updateUser); // Actualizar usuario
router.delete("/:id", usersController.deleteUser); // Desactivar usuario

module.exports = router;
