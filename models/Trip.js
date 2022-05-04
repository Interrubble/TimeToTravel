const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model { }

Trip.init({
    id: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    trip_budget: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    traveller_amount: { 
        type: DataTypes.INTEGER, 
        allowNull: false,
        defaultValue:1,
    },
    traveller_id: {
        type: DataTypes.INTEGER,
        unique: false,
        allowNull: false,
        foreignKey: true,
        references: {
            model: "traveller",
            key: "id",
        },
    },
    location_id: {
        type: DataTypes.INTEGER,
        unique: false,
        allowNull: false,
        foreignKey: true,
        references: {
            model: "location",
            key: "id",
        },
    }
},{
    sequelize,
    timestamps:false,
    freezeTableName:true,
});

module.exports = Trip