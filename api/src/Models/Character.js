const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Character', {
        // characterId: {
        //     type: DataTypes.INTEGER,
        // },
        name: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.STRING,
        },
        species: {
            type: DataTypes.STRING,
        },
        gender: {
            type: DataTypes.STRING,
        },
        // // origin: {},
        // // location: {},
        // // episode: {}
        image: {
            type: DataTypes.STRING,
        },
        created: {
            type: DataTypes.STRING,
        },
    }, {
        timestamps: false,
    });
};