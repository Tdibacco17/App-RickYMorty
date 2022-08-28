const { Router } = require("express");
const { routeGetAllCharacters, routeGetCharacterDetail, characterEpisodes, characterLocationOrigin, characterLocation, characterEpisodesCap, characterLocationResidents } = require("../Controllers/CharacterRoutes")
const { routeFiltered, allSpecies } = require("../Controllers/FilterRoute")

const router = Router();

router.get("/Characters", routeGetAllCharacters);
router.get("/Details/:id", routeGetCharacterDetail);
router.get("/Status/:status/:species/:gender", routeFiltered)
router.get("/AllSpecies", allSpecies) //funcion para la cantidad del arreglo de especies
router.get("/relacionesEpisodios/:id", characterEpisodes)
router.get("/relacionesEpisodiosCharacterCap/:id", characterEpisodesCap)
router.get("/relacionesLocationOrigin/:id", characterLocationOrigin)
router.get("/relacionesLocation/:id", characterLocation)
router.get("/relacionesLocationResidents/:id", characterLocationResidents)


// //------------------------------------------------------------
// const { characterDataBase } = require("../Controllers/Database/DataBase")  // base de datos "no tocar xd"

// router.get("/dataBase", characterDataBase) // base de datos "no tocar xd"

module.exports = router;