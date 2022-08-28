const dotenv = require('dotenv')
dotenv.config();
const { Sequelize } = require("sequelize");
const modelCharacter = require("./src/Models/Character");
const modelEpisode = require("./src/Models/Episode");
const modelLocation = require("./src/Models/Location")

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, 
  native: false, 
});

modelCharacter(sequelize);
modelEpisode(sequelize);
modelLocation(sequelize);

const { Character, Episode, Location } = sequelize.models;

// Character.belongsToMany(Episode, {through: 'Character_Episode'});
// Episode.belongsToMany(Character, {through: 'Character_Episode'});

// Episode.hasOne(Location, {through: 'Episode_Location'});
// Location.hasOne(Episode, {through: 'Episode_Location'});

module.exports = {
    ...sequelize.models,
    db: sequelize,
};