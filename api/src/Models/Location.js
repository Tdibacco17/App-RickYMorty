const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Location', {
    //     id:{},
        name: {
            type: DataTypes.STRING,
        },
        //residents: {},
    }, {
        timestamps: false,
    });
};