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

const routeGetStatus = async (req, res) => {
    const { status } = req.params;
    const { nameCharacter } = req.query

    let result;
    try {
        if (status !== "All") {
            result = await Character.findAll({
                where: {
                    [Op.and]: [{
                        name: {
                            [Op.iLike]: `%${nameCharacter}%`,
                        }
                    }, {
                        status: {
                            [Op.iLike]: status,
                        }
                    }]
                }
            })

            return res.json(result)
        } else {
            result = await Character.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${nameCharacter}%`,
                    }
                }
            })

            return res.json(result)
        }
    } catch (e) {
        return res.status(400).json({ msg: `Error 404 - ${e}` });
    };
}

const routeGetSpecies = async (req, res) => {
    const { status, nameCharacter, species } = req.body
    console.log(req.body)

    try {


        return res.json(allSpecies)
    } catch (e) {
        return res.status(400).json({ msg: `Error 404 - ${e}` });
    }
}




//------------------------------------------------------------------------
//Funcion para sacar la cantidad de especies que tiene el arreglo genereal
const allSpecies = async (req, res) => {
    try {
        const todo = await Character.findAll()
        const species = todo.map(e => e.species)
        let resultSpecies = new Set(species);
        const allSpecies = Array.from(resultSpecies);

        return res.json(allSpecies)
    } catch (e) {
        return res.status(400).json({ msg: `Error 404 - ${e}` });
    }
}

module.exports = { routeGetAllCharacters, routeGetCharacterDetail, routeGetStatus, routeGetSpecies, allSpecies };