const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Episode', {
    //     id:{},
        name: {
            type: DataTypes.STRING,
        },
    // }, {
    //     timestamps: false,
    });
};