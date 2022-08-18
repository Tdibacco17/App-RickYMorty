const axios = require("axios");

async function getAllCharactersCounters() {

    const { data } = await axios.get(`https://rickandmortyapi.com/api/character`);

    const numberOfPages = data.info.pages

    let arraycharacter = new Array(numberOfPages).fill()

    const returncharacters = arraycharacter.map(async (e) => {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character?page=${e}`);

        return await data.results.map(j => {
            return {
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
    return Promise.all(returncharacters)
}

async function getAllEpisodesCounters() {

    const { data } = await axios.get(`https://rickandmortyapi.com/api/episode`);

    const numberOfPages = data.info.pages

    let arrayepisode = new Array(numberOfPages).fill()

    const returnepisodes = arrayepisode.map(async (e) => {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/episode?page=${e}`);

        return await data.results.map(j => {
            return {
                name: j.name,
                // characters: j.characters,
            }
        });
    });
    return Promise.all(returnepisodes)
}

async function getAllLocationsCounters() {

    const { data } = await axios.get(`https://rickandmortyapi.com/api/location`);

    const numberOfPages = data.info.pages

    let arrayLocation = new Array(numberOfPages).fill()

    const returnLocation = arrayLocation.map(async (e) => {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/location?page=${e}`);

        return await data.results.map(j => {
            return {
                name: j.name,
                // residents: j.residents,
            }
        });
    });
    return Promise.all(returnLocation)
}

module.exports = { getAllCharactersCounters, getAllEpisodesCounters, getAllLocationsCounters };