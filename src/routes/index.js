const { Router } = require("express");
const userRoutes = require("./UserRoutes");
const reflexionRoutes = require("./ReflexionRoutes");
const authRoutes = require("./LoginRoutes")

const router = Router();

router.use("/user", userRoutes);
router.use("/auth", authRoutes)
router.use("/reflexion", reflexionRoutes);

module.exports = router;