const axios = require("axios");

async function getAllCharacters() {

    const { data } = await axios.get(`https://rickandmortyapi.com/api/character`);

    const numberOfPages = data.info.pages

    let arraycharacter = new Array(numberOfPages).fill()

    const returncharacters = arraycharacter.map(async (e, index) => {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character?page=${1 + index}`);

        let hola = data.results.map(j => {
            return {
                id: j.id,
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
        return hola
    });
   

    return Promise.all(returncharacters);
}

async function getAllEpisodes() {

    const { data } = await axios.get(`https://rickandmortyapi.com/api/episode`);

    const numberOfPages = data.info.pages// 3
   
    var arrayepisode =  new Array(numberOfPages).fill() 

    const returnepisodes = arrayepisode.map(async (e, index) => {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/episode?page=${1 + index}`);

        let hola = data.results.map(j => {
            return {
                id: j.id,
                name: j.name,
                // characters: j.characters,
            }
        });
        return hola
    });
    return Promise.all(returnepisodes)
}

async function getAllLocations() {

    const { data } = await axios.get(`https://rickandmortyapi.com/api/location`);

    const numberOfPages = data.info.pages

    let arrayLocation = new Array(numberOfPages).fill()

    const returnLocation = arrayLocation.map(async (e, index) => {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/location?page=${1 + index}`);

        return await data.results.map(j => {
            return {
                id: j.id,
                name: j.name,
                // residents: j.residents,
            }
        });
    });
    return Promise.all(returnLocation)
}

module.exports = { getAllCharacters, getAllEpisodes, getAllLocations };