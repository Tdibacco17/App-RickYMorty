const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Character', {
    //     id: {},
        name: {
            type: DataTypes.STRING,
        },
        // status: {},
        // species: {},
        // gender: {},
        // origin: {},
        // location: {},
        // episode: {}
        // image: {},
        // created: {},
    }, {
        timestamps: false,
    });
};