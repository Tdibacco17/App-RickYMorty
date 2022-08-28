const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Location', {
        locationId:{
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
        },
        type: {
            type: DataTypes.STRING,
        },
        dimension: {
            type: DataTypes.STRING,
        },
        residents: {
            type: DataTypes.ARRAY(DataTypes.DECIMAL)
        },
    }, {
        timestamps: false,
    });
};