const {
  createUserService,
  getUsersService,
  getUserByIdService,
  getParticipantesByAdminService,
  updateUserService,
  deleteUserService,
} = require("../services/UserService");

const catchAsync = require("../utils/catchAsync");

// Crear usuario
const createUser = async (req, res) => {
  const newUser = await createUserService(req.body);
  res.status(201).json({
    message: "Usuario creado exitosamente",
    user: newUser,
  });
};

// Obtener todos los usuarios activos
const getAllUsers = async (req, res) => {
  const users = await getUsersService();
  res.status(200).json(users);
};

// Obtener usuario por ID
const getUserById = async (req, res) => {
  const user = await getUserByIdService(req.params.id);
  res.status(200).json(user);
};

// Obtener participantes de un administrador
const getParticipantesByAdmin = async (req, res) => {
  const participantes = await getParticipantesByAdminService(req.params.adminId);
  res.status(200).json(participantes);
};

// Actualizar usuario
const updateUser = async (req, res) => {
  const updatedUser = await updateUserService(req.params.id, req.body);
  res.status(200).json({
    message: "Usuario actualizado exitosamente",
    user: updatedUser,
  });
};

// Desactivar usuario
const deleteUser = async (req, res) => {
  await deleteUserService(req.params.id);
  res.status(200).json({
    message: "Usuario desactivado exitosamente",
  });
};

module.exports = {
  createUser: catchAsync(createUser),
  getAllUsers: catchAsync(getAllUsers),
  getUserById: catchAsync(getUserById),
  getParticipantesByAdmin: catchAsync(getParticipantesByAdmin),
  updateUser: catchAsync(updateUser),
  deleteUser: catchAsync(deleteUser),
};
