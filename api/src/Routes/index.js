const { Router } = require("express");
const {ejercicio1, ejercicio2, ejercicio3} = require("../Controllers/CharacterRoutes")

const router = Router();

router.get("/hola1", ejercicio1);
router.get("/hola2", ejercicio2);
router.get("/hola3", ejercicio3)


module.exports = router;