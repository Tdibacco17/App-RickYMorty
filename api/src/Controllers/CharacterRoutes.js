const { Character, Episode, Location } = require('../../db');

const routeGetAllCharacters = async (req, res) => {
    try {
        result = await Character.findAll()

        return res.json(result)
    } catch (e) {
        return res.status(400).json({ msg: `Error 404 - ${e}` });
    };
};

const routeGetCharacterDetail = async (req, res) => {
    const { id } = req.params;

    try {
        result = await Character.findByPk(id);
        if (result === null) return res.status(404).send('Character not found');
        return res.json(result)
    } catch (e) {
        return res.status(400).json({ msg: `Error 404 - ${e}` });
    };
};

module.exports = { routeGetAllCharacters, routeGetCharacterDetail };