const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Episode', {
        // episodeId:{
        //      type: DataTypes.INTEGER,
        // },
        name: {
            type: DataTypes.STRING,
        },
        //characters : {},
    }, {
        timestamps: false,
    });
};