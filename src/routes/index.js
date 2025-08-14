const { Router } = require("express");
const userRoutes = require("./UserRoutes");
const reflexionRoutes = require("./ReflexionRoutes");
const authRoutes = require("./LoginRoutes")
const lineaBaseRoutes = require("./LineaBaseRoutes");

const router = Router();

router.use("/user", userRoutes);
router.use("/auth", authRoutes);
router.use("/reflexion", reflexionRoutes);
router.use("/lineabase", lineaBaseRoutes);

module.exports = router;