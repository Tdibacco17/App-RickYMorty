const dotenv = require('dotenv')
dotenv.config();
const { Sequelize } = require("sequelize");
const modelCharacter = require("./src/Models/Character");
const modelEpisode = require("./src/Models/Episode");
const modelLocation = require("./src/Models/Location")
const { pg } = require('pg');

const { PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE } = process.env;

const sequelize = new Sequelize(`postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  dialectModule: pg
});


// let sequelize =
//   process.env.NODE_ENV === "production"
//     ? new Sequelize({
//       database: DB_NAME,
//       dialect: "postgres",
//       host: DB_HOST,
//       port: 5432,
//       username: DB_USER,
//       password: DB_PASSWORD,
//       pool: {
//         max: 3,
//         min: 1,
//         idle: 10000,
//       },
//       dialectOptions: {
//         ssl: {
//           require: true,
//           // Ref.: https://github.com/brianc/node-postgres/issues/2009
//           rejectUnauthorized: false,
//         },
//         keepAlive: true,
//       },
//       ssl: true,
//     })
//     : new Sequelize(
//       `postgres://${{ PGUSER }}:${{ PGPASSWORD }}@${{ PGHOST }}:${{ PGPORT }}/${{ PGDATABASE }}`,
//       { logging: false, native: false }
//     );

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