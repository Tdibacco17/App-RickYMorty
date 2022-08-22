// const { getAllCharacters } = require("./FunctionController");
// const { Character } = require('../../../db');

// const characterDataBase = async (req, res) => {
//     const characters = await getAllCharacters();

//     try {

//         const charactersDB = characters.map(e => e.map(j => {
//             return Character.create({
//                 characterId: j.characterId,
//                 name: j.name,
//                 status: j.status,
//                 species: j.species,
//                 gender: j.gender,
//                 image: j.image,
//                 created: j.created,
//             })
//         }))
//         // const episodes = await getAllEpisodes();
//         // const episodesDB = episodes.map(e => e.map(j => {
//         //     return Episode.create({
//         //         characterId: j.characterId,
//         //         name: j.name,
//         //     })
//         // }))

//         // const locations = await getAllLocations();
//         // const locationsDB = locations.map(e => e.map(j => {
//         //     return Episode.create({
//         //         characterId: j.characterId,
//         //         name: j.name,
//         //     })
//         // }))
//         return res.json("Base de datos cargada")
//     } catch (e) {
//         return res.status(400).json({ msg: `Error 404 - ${e}` });
//     }
// }

// module.exports = { characterDataBase };