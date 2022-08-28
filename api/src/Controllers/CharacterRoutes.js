const { Character, Episode, Location } = require('../../db');
const { Op } = require("sequelize");

const routeGetAllCharacters = async (req, res) => {
    const { nameCharacter } = req.query

    try {
        let result;
        if (nameCharacter) {
            result = await Character.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${nameCharacter}%`,
                    }
                }
            })
            return res.json(result)
        }

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

const characterEpisodes = async (req, res) => {
    const { id } = req.params
    console.log(id)

    try {
        const personaje = await Character.findAll({
            where: { id: id } //characterId
        })
        let episodios = personaje[0].episode

        let result = await episodios.map(async e => {

            return await Episode.findAll({
                where: { id: e }
            })
        })

        return res.json(await Promise.all(result))
    } catch (e) {
        return res.status(400).json({ msg: `Error 404 - ${e}` });
    }
}

const characterLocationOrigin = async (req, res) => {
    const { id } = req.params

    try {
        const personaje = await Character.findAll({
            where: { id: id }//characterId
        })
        let location = personaje[0].origin

        const result = await Location.findAll({
            where: { id: location.id_location }
        })
        return res.json(result)

    } catch (e) {
        return res.status(400).json({ msg: `Error 404 - ${e}` });
    }
}

const characterLocation = async (req, res) => {
    const { id } = req.params

    try {
        const personaje = await Character.findAll({
            where: { id: id }//characterId
        })
        let location = personaje[0].location

        const result = await Location.findAll({
            where: { id: location.id_location }
        })
        return res.json(result)

    } catch (e) {
        return res.status(400).json({ msg: `Error 404 - ${e}` });
    }
}

module.exports = { routeGetAllCharacters, routeGetCharacterDetail, characterEpisodes, characterLocationOrigin, characterLocation };