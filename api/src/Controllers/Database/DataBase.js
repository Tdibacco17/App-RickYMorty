// const { getAllCharacters, getAllEpisodes, getAllLocations } = require("./FunctionController");
// const { Character, Episode, Location } = require('../../../db');

// //los creo recien aca asi me los trae ordenados por id, ya que con el promise.all los trae en cualq orden

// const characterDataBase = async (req, res) => {

//     try {
//         const personajes = await getAllCharacters();

//         const result1 = personajes.map(e => e.map(j => {
//             return Character.create({
//                 characterId: j.characterId,
//                 name: j.name,
//                 status: j.status,
//                 species: j.species,
//                 gender: j.gender,
//                 origin: { id_location: j.origin.id_location.slice(41) },
//                 location: { id_location: j.location.id_location.slice(41) },
//                 episode: j.episode,
//                 image: j.image,
//                 createdDay: j.createdDay,
//                 createdTime: j.createdTime,
//             })
//         }))

//         const episodios = await getAllEpisodes();

//         const result2 = episodios.map(e => e.map(j => {
//             return Episode.create({
//                 episodeId: j.episodeId,
//                 name: j.name,
//                 air_date: j.air_date,
//                 temporada: j.temporada,
//                 capitulo: j.capitulo,
//                 characters: j.characters,
//             })
//         }))


//         const locaciones = await getAllLocations();

//         const result3 = locaciones.map(e => e.map(j => {
//             return Location.create({
//                 locationId: j.locationId,
//                 name: j.name,
//                 type: j.type,
//                 dimension: j.dimension,
//                 residents: j.residents,
//             })
//         }))

//         return res.json("Base de datos cargada")
//     } catch (e) {
//         return res.status(400).json({ msg: `Error 404 - ${e}` });
//     }
// }

// module.exports = { characterDataBase };