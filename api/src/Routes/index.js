const { Router } = require("express");
const getAll = require("../Controllers/CharacterRoutes")

const router = Router();

router.get("/charactersName", getAll);

module.exports = router;