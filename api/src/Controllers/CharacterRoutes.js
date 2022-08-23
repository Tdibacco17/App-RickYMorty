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
    const {nameCharacter} = req.query
    console.log(nameCharacter)
    console.log(status)
    let result;
    try {
        if(status !== "All"){
            result = await Character.findAll({
                where: {
                    status: {
                        [Op.iLike]: status, 
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
}

const routeGetSpecies = async (req, res) => {
    const { species } = req.body

    try {
        result = await Character.findAll({
            where: {
                species: {
                    [Op.iLike]: species,
                }
            }
        })

        return res.json(result)
    } catch (e) {
        return res.status(400).json({ msg: `Error 404 - ${e}` });
    };
}

module.exports = { routeGetAllCharacters, routeGetCharacterDetail, routeGetStatus, routeGetSpecies };