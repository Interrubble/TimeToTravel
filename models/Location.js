const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model { }

Location.init({
    id: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    location_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
},{
    sequelize,
    timestamps:false,
    freezeTableName:true,
});

module.exports = Location;