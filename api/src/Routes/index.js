const { Router } = require("express");
const { getAllNames, getAllLocation, getAllEpisodes} = require("../Controllers/CharacterRoutes")

const router = Router();

router.get("/charactersName", getAllNames);
router.get("/locationsName", getAllLocation);
router.get("/episodesName", getAllEpisodes);

module.exports = router;