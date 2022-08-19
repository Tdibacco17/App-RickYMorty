const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Location', {
        // locationId:{
        //     type: DataTypes.INTEGER,
        // },
        name: {
            type: DataTypes.STRING,
        },
        //residents: {},
    }, {
        timestamps: false,
    });
};