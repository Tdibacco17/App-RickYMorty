const { Router } = require("express");
const { routeGetAllCharacters, routeGetCharacterDetail, routeGetStatus, routeGetSpecies } = require("../Controllers/CharacterRoutes")

const router = Router();

router.get("/Characters", routeGetAllCharacters);
router.get("/Details/:id", routeGetCharacterDetail);
router.get("/Status/:status/", routeGetStatus)
router.get("/Species", routeGetSpecies)

// //------------------------------------------------------------
// const {characterDataBase} = require("../Controllers/DataBase")  // base de datos "no tocar xd"

// router.get("/hola4", characterDataBase) // base de datos "no tocar xd"

module.exports = router;