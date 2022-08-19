const axios = require("axios");

//para cargar la base de datos

async function getAllCharacters() {

    const { data } = await axios.get(`https://rickandmortyapi.com/api/character`);

    const numberOfPages = data.info.pages

    let arraycharacter = new Array(numberOfPages).fill()

    const returnCharacters = arraycharacter.map(async (e, index) => {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character?page=${1 + index}`);

        return await data.results.map(j => {
            return {
                characterId: j.id,
                name: j.name,
                status: j.status,
                species: j.species,
                gender: j.gender,
                // origin: j.origin,
                // location: j.location,
                // episode: j.episode,
                image: j.image,
                created: j.created,
            }
        });
    });


    return Promise.all(returnCharacters);
}

async function getAllEpisodes() {

    const { data } = await axios.get(`https://rickandmortyapi.com/api/episode`);

    const numberOfPages = data.info.pages// 3

    var arrayepisode = new Array(numberOfPages).fill()

    const returnEpisodes = arrayepisode.map(async (e, index) => {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/episode?page=${1 + index}`);

        let episodeDB = data.results.map(j => {

        })

        return await data.results.map(j => {
            return {
                episodeId: j.id,
                name: j.name,
                // characters: j.characters,
            }
        });
    });
    return Promise.all(returnEpisodes)
}

async function getAllLocations() {

    const { data } = await axios.get(`https://rickandmortyapi.com/api/location`);

    const numberOfPages = data.info.pages

    let arrayLocation = new Array(numberOfPages).fill()

    const returnLocation = arrayLocation.map(async (e, index) => {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/location?page=${1 + index}`);

        return await data.results.map(j => {
            return {
                locationId: j.id,
                name: j.name,
                // residents: j.residents,
            }
        });
    });
    return Promise.all(returnLocation)
}

module.exports = { getAllCharacters, getAllEpisodes, getAllLocations };