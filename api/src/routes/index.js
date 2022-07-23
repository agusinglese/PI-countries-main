const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const CountriesRoutes = require("./countries");
const ActivitiesRoutes = require("./activities");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", CountriesRoutes);
router.use("/activities", ActivitiesRoutes);

module.exports = router;
