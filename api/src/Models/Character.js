const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Character', {
    //     id: {},
        name: {
            type: DataTypes.STRING,
        },
    //     species: {},
    //     origin: {},
    //     image: {},
    //     created: {},
    // }, {
    //     timestamps: false,
    });
};