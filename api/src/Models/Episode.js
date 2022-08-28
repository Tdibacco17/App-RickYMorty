const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Episode', {
        episodeId:{
             type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
        },
        air_date: {
            type: DataTypes.STRING,
        },
        temporada: {
            type: DataTypes.STRING,
        },
        capitulo: {
            type: DataTypes.STRING,
        },        
        characters : {
            type: DataTypes.ARRAY(DataTypes.DECIMAL)
        },
    }, {
        timestamps: false,
    });
};