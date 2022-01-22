const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Request extends Model {}
// property, type, tenet name, message
Request.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true,
            allowNull: false
        },
        property: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'property',
                key: 'id'
            }
        },
        request_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tenet_name: {
            type: DataTypes.STRING,
            allowNull: false,
            references: 'tenet',
            key: 'tenet_name'
        },
        tenet_phone: {
            type: DataTypes.STRING,
            allowNull: false,
            references: 'tenet',
            key: 'tenet_phone'
        },
        request_message: {
            type: DataTypes.TEXT,
            allowNull: false,
        }

    },
    {
      sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'request'  
    }
    
);

module.exports = Request;

//FIND OUT ABOUT MULTIPLE KEYS