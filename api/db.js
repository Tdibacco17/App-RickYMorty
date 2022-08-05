const dotenv = require('dotenv')
dotenv.config();
const { Sequelize } = require("sequelize");
const modelCharacter = require("./src/Models/Character");
const modelEpisode = require("./src/Models/Episode");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, 
  native: false, 
});

modelCharacter(sequelize);
modelEpisode(sequelize);

const { Character, Episode } = sequelize.models;

Character.belongsToMany(Episode, {through: 'Character_Episode'});
Episode.belongsToMany(Character, {through: 'Character_Episode'});

module.exports = {
    ...sequelize.models,
    db: sequelize,
};