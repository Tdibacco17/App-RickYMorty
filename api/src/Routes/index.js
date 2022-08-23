const { Router } = require("express");
const { routeGetAllCharacters, routeGetCharacterDetail, routeGetStatus, routeGetSpecies, allSpecies } = require("../Controllers/CharacterRoutes")

const router = Router();

router.get("/Characters", routeGetAllCharacters);
router.get("/Details/:id", routeGetCharacterDetail);
router.get("/Status/:status/", routeGetStatus)
router.get("/Species", routeGetSpecies)
router.get("/AllSpecies", allSpecies) //funcion para la cantidad del arreglo






// //------------------------------------------------------------
// const {characterDataBase} = require("../Controllers/DataBase")  // base de datos "no tocar xd"

// router.get("/hola4", characterDataBase) // base de datos "no tocar xd"

module.exports = router;