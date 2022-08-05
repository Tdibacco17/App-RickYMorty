const axios = require("axios");

async function getAllCharacter() {
    const  {data}  = await axios.get("https://rickandmortyapi.com/api/character");

    return await data.results.map(e => {
        return {
            character: e.name,
        }
    });
}

async function getNameLocation() {
    const { data } = await axios.get("https://rickandmortyapi.com/api/location");
    
    return await data.results.map(e => {
        return {
            name: e.name
        }
    });
}

async function getNameEpisode() {
    const {data} = await axios.get("https://rickandmortyapi.com/api/episode");

    return await data.results.map(e => {
        return {
            name: e.name
        }
    });
}

module.exports = {getAllCharacter, getNameLocation, getNameEpisode};


