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
        if (!id) return res.status(400).json({ msg: `Error 404 - ${e}` });
        result = await Character.findByPk(id);
        if (result === null) return res.status(404).send('Character not found');
        return res.json(result)
    } catch (e) {
        return res.status(400).json({ msg: `Error 404 - ${e}` });
    };
};

const characterEpisodes = async (req, res) => {
    const { id } = req.params
    try {
        if (!id) return res.status(400).json({ msg: `Error 404 - ${e}` });
        const personaje = await Character.findAll({
            where: { id: id }
        })

        let result = await personaje[0].episode.map(async e => {

            return await Episode.findAll({
                where: { id: e }
            })
        })

        return res.json(await Promise.all(result))
    } catch (e) {
        return res.status(400).json({ msg: `Error 404 - ${e}` });
    }
}

const characterEpisodesCap = async (req, res) => {
    const { id } = req.params

    try {
        if (!id) return res.status(400).json({ msg: `Error 404 - ${e}` });
        const episodio = await Episode.findAll({
            where: { id: id }
        })

        let result = await episodio[0].characters.map(async e => {

            return await Character.findAll({
                where: { id: e }
            })
        })

        return res.json(await Promise.all(result))
    } catch (e) {
        return res.status(400).json({ msg: `Error 404 - ${e}` });
    }
}

const characterLocation = async (req, res) => {
    const { id } = req.params

    try {
        if (!id) return res.status(400).json({ msg: `Error 404 - ${e}` });
        const personaje = await Character.findAll({
            where: { id: id }
        })
        let location = personaje[0].location

        if (location.id_location === "") return res.status(400).json({ msg: `Error 404 - ${e}` });

        const result = await Location.findAll({
            where: { id: location.id_location }
        })

        return res.json(result)

    } catch (e) {
        return res.status(400).json({ msg: `Error 404 - ${e}` });
    }
}
const characterLocationResidents = async (req, res) => {
    const { id } = req.params

    try {
        if (!id) return res.status(400).json({ msg: `Error 404 - ${e}` });
        const location = await Location.findAll({
            where: { id: id }
        })

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
        if (!id) return res.json({});

        const personaje = await Character.findAll({
            where: { id: id }
        })
        let validacion = personaje[0].origin.id_location 
        if(validacion === "") return res.status(400).json({ msg: `Error 404 - ${e}` });

        let result = await Location.findAll({
            where: { id: validacion }
        })
        return res.json(result)
    } catch (e) {
        return res.status(400).json({ msg: `Error 404 - ${e}` });
    }
}



const characterOriginResidents = async (req, res) => {
    const { id } = req.params

    try {
        if (!id) return res.status(400).json({ msg: `Error 404 - ${e}` });
        const location = await Location.findAll({
            where: { id: id }
        })

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

module.exports = { routeGetAllCharacters, routeGetCharacterDetail, characterEpisodes, characterOrigin, characterLocation, characterEpisodesCap, characterLocationResidents, characterOriginResidents };