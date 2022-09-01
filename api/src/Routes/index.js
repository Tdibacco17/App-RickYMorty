const { Router } = require("express");
const { routeGetAllCharacters, routeGetCharacterDetail, characterEpisodes, characterOrigin, characterLocation, characterEpisodesCap, characterLocationResidents, characterOriginResidents } = require("../Controllers/CharacterRoutes")
const { routeFiltered } = require("../Controllers/FilterRoute")

const router = Router();

router.get("/Characters", routeGetAllCharacters);
router.get("/Details/:id", routeGetCharacterDetail);
router.get("/Status/:status/:species/:gender", routeFiltered)
router.get("/relacionesEpisodios/:id", characterEpisodes)
router.get("/relacionesEpisodiosCharacterCap/:id", characterEpisodesCap)
router.get("/relacionesOrigin/:id", characterOrigin)
router.get("/relacionesOriginResidents/:id", characterOriginResidents)
router.get("/relacionesLocation/:id", characterLocation)
router.get("/relacionesLocationResidents/:id", characterLocationResidents)


// //------------------------------------------------------------
// const { characterDataBase } = require("../Controllers/Database/DataBase")  // base de datos "no tocar "

// router.get("/dataBase", characterDataBase) // base de datos "no tocar "

module.exports = router;