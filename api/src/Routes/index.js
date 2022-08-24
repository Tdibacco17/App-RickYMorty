const { Router } = require("express");
const { routeGetAllCharacters, routeGetCharacterDetail } = require("../Controllers/CharacterRoutes")
const { routeFiltered, allSpecies } = require("../Controllers/FilterRoute")

const router = Router();

router.get("/Characters", routeGetAllCharacters);
router.get("/Details/:id", routeGetCharacterDetail);
router.get("/Status/:status/:species/:gender", routeFiltered)
router.get("/AllSpecies", allSpecies) //funcion para la cantidad del arreglo de especies






// //------------------------------------------------------------
// const {characterDataBase} = require("../Controllers/DataBase")  // base de datos "no tocar xd"

// router.get("/hola4", characterDataBase) // base de datos "no tocar xd"

module.exports = router;