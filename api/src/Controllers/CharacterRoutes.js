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
            if (result === undefined) return res.status(200).json([]);

            return res.json(result)
        }

        result = await Character.findAll()

        return res.json(result)
    } catch (e) {
        return res.status(500).json({ msg: `Error 500 - ${e}` });
    };
};

const routeGetCharacterDetail = async (req, res) => {
    const { id } = req.params;
    
    try {
        if (!id || id === ":id") return res.status(400).json({msg: "Error 400"});
        result = await Character.findByPk(id);
        if (result === null) return res.status(404).json({msg: "Error 404"});;
        return res.json(result)
    } catch (e) {
        return res.status(500).json({ msg: `Error 500 - ${e}` });
    };
};

const characterEpisodes = async (req, res) => {
    const { id } = req.params

    try {
        if (!id || id === ":id") return res.status(400).json([]);
        const personaje = await Character.findAll({
            where: { id: id }
        })
        if (personaje.length === 0) return res.status(404).json([]);

        let result = await personaje[0].episode.map(async e => {

            return await Episode.findAll({
                where: { id: e }
            })
        })

        return res.json(await Promise.all(result))
    } catch (e) {
        return res.status(500).json({ msg: `Error 500 - ${e}` });
    }
}

const characterEpisodesCap = async (req, res) => {
    const { id } = req.params

    try {
        if (!id || id === ":id") return res.status(400).json([]);
        const episodio = await Episode.findAll({
            where: { id: id }
        })
        if (episodio.length === 0) return res.status(404).json([]);
        let result = await episodio[0].characters.map(async e => {

            return await Character.findAll({
                where: { id: e }
            })
        })

        return res.json(await Promise.all(result))
    } catch (e) {
        return res.status(500).json({ msg: `Error 500 - ${e}` });
    }
}

const characterLocation = async (req, res) => {
    const { id } = req.params

    try {
        if (!id || id === ":id") return res.status(400).json([]);
        const personaje = await Character.findAll({
            where: { id: id }
        })
        if (personaje.length === 0) return res.status(404).json([]);

        let location = personaje[0].location.id_location

        const result = await Location.findAll({
            where: { id: location }
        })

        return res.json(result)

    } catch (e) {
        return res.status(500).json({ msg: `Error 500 - ${e}` });
    }
}
const characterLocationResidents = async (req, res) => {
    const { id } = req.params

    try {
        if (!id || id === ":id") return res.status(400).json([]);
        const location = await Location.findAll({
            where: { id: id }
        })
        if (location.length === 0) return res.status(404).json([]);
        
        let result = await location[0].residents.map(async e => {
            return await Character.findAll({
                where: { id: e }
            })
        })

        return res.json(await Promise.all(result))
    } catch (e) {
        return res.status(400).json({ msg: `Error 404 - ${e}` });
    }
}

const characterOrigin = async (req, res) => {
    const { id } = req.params

    try {
        if (!id || id === ":id") return res.status(400).json([]);
        const personaje = await Character.findAll({
            where: { id: id }
        })
        if (personaje.length === 0) return res.status(404).json([]);

        let validacion = personaje[0].origin.id_location

        let result = await Location.findAll({
            where: { id: validacion }
        })
        return res.json(result)
    } catch (e) {
        return res.status(500).json({ msg: `Error 500 - ${e}` });
    }
}

const characterOriginResidents = async (req, res) => {
    const { id } = req.params

    try {
        if (!id || id === ":id") return res.status(400).json([]);
        const location = await Location.findAll({
            where: { id: id }
        })
        if (location.length === 0) return res.status(404).json([]);

        let result = await location[0].residents.map(async e => {
            return await Character.findAll({
                where: { id: e }
            })
        })

        return res.json(await Promise.all(result))
    } catch (e) {
        return res.status(500).json({ msg: `Error 500 - ${e}` });
    }
}

module.exports = { routeGetAllCharacters, routeGetCharacterDetail, characterEpisodes, characterOrigin, characterLocation, characterEpisodesCap, characterLocationResidents, characterOriginResidents };