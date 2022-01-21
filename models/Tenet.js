const { Model,DataTypes} = require('sequelize');

const sequelize = require('../config/connection');

class Tenet extends Model {}
// name, contact info - phone and email, property, 
Tenet.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tenet_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tenet_phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tenet_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tenet_property: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'property',
                key: 'address'
            }
        }
    }, {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'tenet'
    }

);
module.exports = Tenet;