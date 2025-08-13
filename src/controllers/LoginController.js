const { loginService } = require("../services/LoginUserService");
const catchAsync = require("../utils/catchAsync");

const login = async (req, res) => {
  const result = await loginService(req.body);
  res.status(200).json({
    message: "Login exitoso",
    ...result,
  });
};

module.exports = {
  login: catchAsync(login),
};
