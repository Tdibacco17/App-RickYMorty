const axios = require("axios");

async function getAllType(buscador) {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/${buscador}`);

    return await data.results.map(e => {
        return {
            name: e.name,
        }
    });
}

module.exports = getAllType;

