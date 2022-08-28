// const axios = require("axios");
// const { Character, Episode, Location } = require('../../../db');
// //para cargar la base de datos

// async function getAllCharacters() {

//     const { data } = await axios.get(`https://rickandmortyapi.com/api/character`);

//     const numberOfPages = data.info.pages

//     let arraycharacter = new Array(numberOfPages).fill()

//     const returnCharacters = arraycharacter.map(async (e, index) => {
//         const { data } = await axios.get(`https://rickandmortyapi.com/api/character?page=${1 + index}`);

//         return await data.results.map(j => {
//             return {
//                 characterId: j.id,
//                 name: j.name,
//                 status: j.status,
//                 species: j.species,
//                 gender: j.gender,
//                 origin: { id_location: j.origin.url.slice(41) },
//                 location: { id_location: j.location.url.slice(41) },
//                 episode: j.episode.map(h => h.slice(40)),
//                 image: j.image,
//                 createdDay: j.created.slice(0, 10),
//                 createdTime: j.created.slice(11, 16),
//             }
//         });
//     });

//     return Promise.all(returnCharacters);
// }

// async function getAllEpisodes() {

//     const { data } = await axios.get(`https://rickandmortyapi.com/api/episode`);

//     const numberOfPages = data.info.pages// 3

//     var arrayepisode = new Array(numberOfPages).fill()

//     const returnEpisodes = arrayepisode.map(async (e, index) => {
//         const { data } = await axios.get(`https://rickandmortyapi.com/api/episode?page=${1 + index}`);

//         return await data.results.map(j => {
//             return {
//                 episodeId: j.id,
//                 name: j.name,
//                 air_date: j.air_date,
//                 temporada: j.episode.slice(1, 3),
//                 capitulo: j.episode.slice(4),
//                 characters: j.characters.map(h => h.slice(42)),
//             }
//         });
//     });
//     return Promise.all(returnEpisodes)
// }

// async function getAllLocations() {

//     const { data } = await axios.get(`https://rickandmortyapi.com/api/location`);

//     const numberOfPages = data.info.pages

//     let arrayLocation = new Array(numberOfPages).fill()

//     const returnLocation = arrayLocation.map(async (e, index) => {
//         const { data } = await axios.get(`https://rickandmortyapi.com/api/location?page=${1 + index}`);

//         return await data.results.map(j => {
//             return {
//                 locationId: j.id,
//                 name: j.name,
//                 type: j.type,
//                 dimension: j.dimension,
//                 residents: j.residents.map(h => h.slice(42)),
//             }
//         });
//     });
//     return Promise.all(returnLocation)
// }

// module.exports = { getAllCharacters, getAllEpisodes, getAllLocations };