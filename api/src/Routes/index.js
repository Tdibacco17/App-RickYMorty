const { Router } = require("express");
const { routeGetAllCharacters, routeGetCharacterDetail } = require("../Controllers/CharacterRoutes")

const router = Router();

router.get("/Characters", routeGetAllCharacters);
router.get("/Details/:id", routeGetCharacterDetail);

// //------------------------------------------------------------
// const {characterDataBase} = require("../Controllers/DataBase")  // base de datos "no tocar xd"

// router.get("/hola4", characterDataBase) // base de datos "no tocar xd"

module.exports = router;