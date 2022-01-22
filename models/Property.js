const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Property extends Model {}
// id, address, type(duplex, single,etc), bedrooms, bath, rent, sq ft
Property.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false, 

        },
        house_type: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        bedrooms: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bathrooms: {
            type: DataTypes.DECIMAL(2, 1),
            allowNull: false
        },
        rent: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        sq_ft: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tenet_name: {
            type: DataTypes.STRING,
            allowNull: true,
            references: {
                model: 'tenet',
                key: 'tenet_name'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'property'
    }
)

module.exports = Property;
