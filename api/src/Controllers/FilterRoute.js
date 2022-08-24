const { Character, Episode, Location } = require('../../db');
const { Op } = require("sequelize");


const routeFiltered = async (req, res) => {
    const { status, species, gender } = req.params;
    const { nameCharacter } = req.query
    
    console.log(status)
    console.log(species)
    console.log(gender)
    console.log(nameCharacter)

    let result;
    try {
        if (status !== "All" && species !== "All" && gender !== "All") {
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
                    }, {
                        species: {
                            [Op.iLike]: species,
                        }
                    }, {
                        gender: {
                            [Op.iLike]: gender,
                        }
                    }]
                }
            })

            return res.json(result)
        } else if (species === "All" && status !== "All" && gender !== "All") {
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
                    }, {
                        gender: {
                            [Op.iLike]: gender,
                        }
                    }]
                }
            })

            return res.json(result)
        } else if (species === "All" && status === "All" && gender !== "All") {
            result = await Character.findAll({
                where: {
                    [Op.and]: [{
                        name: {
                            [Op.iLike]: `%${nameCharacter}%`,
                        }
                    }, {
                        gender: {
                            [Op.iLike]: gender,
                        }
                    }]
                }
            })

            return res.json(result)
        } else if (species === "All" && status !== "All" && gender === "All") {
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
        } else if (species !== "All" && status === "All" && gender !== "All") {
            result = await Character.findAll({
                where: {
                    [Op.and]: [{
                        name: {
                            [Op.iLike]: `%${nameCharacter}%`,
                        }
                    }, {
                        species: {
                            [Op.iLike]: species,
                        }
                    }, {
                        gender: {
                            [Op.iLike]: gender,
                        }
                    }]
                }
            })

            return res.json(result)
        } else if (species !== "All" && status === "All" && gender === "All") {
            result = await Character.findAll({
                where: {
                    [Op.and]: [{
                        name: {
                            [Op.iLike]: `%${nameCharacter}%`,
                        }
                    }, {
                        species: {
                            [Op.iLike]: species,
                        }
                    }]
                }
            })

            return res.json(result)
        } else if (species !== "All" && status !== "All" && gender === "All") {
            result = await Character.findAll({
                where: {
                    [Op.and]: [{
                        name: {
                            [Op.iLike]: `%${nameCharacter}%`,
                        }
                    }, {
                        species: {
                            [Op.iLike]: species,
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

module.exports = { routeFiltered, allSpecies };