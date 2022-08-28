const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Character', {
        characterId: {
            type: DataTypes.INTEGER,
        },
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
        origin: {
            type: DataTypes.JSON,
        },
        location: {
            type: DataTypes.JSON,
        },
        episode: {
            type: DataTypes.ARRAY(DataTypes.DECIMAL)
        },
        image: {
            type: DataTypes.STRING,
        },
        createdDay: {
            type: DataTypes.STRING,
        },
        createdTime: {
            type: DataTypes.STRING,
        },
    }, {
        timestamps: false,
    });
};