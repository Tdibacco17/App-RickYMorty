const { Character, Episode, Location } = require('../../db');
const { Op } = require("sequelize");


const routeFiltered = async (req, res) => {
    const { status, species, gender } = req.params;
    const { nameCharacter } = req.query

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
        } else { // no entra nunca pero es un caso x default
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
        return res.status(500).json({ msg: `Error 500 - ${e}` });
    };
}

module.exports = { routeFiltered };