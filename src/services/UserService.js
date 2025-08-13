const { User } = require("../db");
const bcrypt = require("bcryptjs");
const {
  sendAdminWelcomeEmail,
  sendParticipantWelcomeEmail,
} = require("./EmailService");

// Crear usuario (admin o participante)
const createUserService = async (data) => {
  const { name, email, password, role, imageUrl, isActive, adminId, eventId } = data;

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) throw new Error("Ya existe un usuario con este correo");

  // Si se registra un participante con adminId, validarlo
  if (adminId) {
    const adminUser = await User.findByPk(adminId);
    if (!adminUser || adminUser.role !== "admin") {
      throw new Error("adminId inválido o no corresponde a un administrador");
    }
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
    imageUrl,
    isActive,
    adminId: adminId || null,
    eventId: eventId || null,
  });

  // Enviar correo (si tienes EmailService funcionando)
  try {
    if (role === "admin") {
      await sendAdminWelcomeEmail({ name, email, password });
    } else if (role === "participante") {
      await sendParticipantWelcomeEmail({ name, email, password });
    }
  } catch (err) {
    console.error("Error enviando email:", err.message);
  }

  return newUser;
};

// Obtener todos los usuarios activos (sin contraseña)
const getUsersService = async () => {
  return await User.findAll({
    where: { isActive: true },
    attributes: { exclude: ["password"] },
  });
};

// Obtener un usuario por ID
const getUserByIdService = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ["password"] },
  });
  if (!user) throw new Error("Usuario no encontrado");
  return user;
};

// Obtener los participantes registrados por un administrador
const getParticipantesByAdminService = async (adminId) => {
  const admin = await User.findByPk(adminId, {
    include: [{
      model: User,
      as: "participantes",
      attributes: { exclude: ["password"] },
    }],
  });

  if (!admin || admin.role !== "admin") {
    throw new Error("Administrador no válido o no encontrado");
  }

  return admin.participantes;
};

// Actualizar un usuario
const updateUserService = async (id, data) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error("Usuario no encontrado");

  const { name, email, password, role, isActive, imageUrl, adminId } = data;

  if (password) {
    user.password = await bcrypt.hash(password, 10);
  }

  if (adminId) {
    const adminUser = await User.findByPk(adminId);
    if (!adminUser || adminUser.role !== "admin") {
      throw new Error("adminId inválido o no corresponde a un administrador");
    }
    user.adminId = adminId;
  }

  user.name = name || user.name;
  user.email = email || user.email;
  user.role = role || user.role;
  user.isActive = isActive !== undefined ? isActive : user.isActive;
  user.imageUrl = imageUrl || user.imageUrl;

  await user.save();
  return user;
};

// Desactivar usuario (eliminación lógica)
const deleteUserService = async (id) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error("Usuario no encontrado");

  user.isActive = false;
  await user.save();
};

module.exports = {
  createUserService,
  getUsersService,
  getUserByIdService,
  getParticipantesByAdminService,
  updateUserService,
  deleteUserService,
};
