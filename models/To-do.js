const { Model,DataTypes} = require('sequelize');

const sequelize = require('../config/connection');

class ToDo extends Model {}
// property, type, text, tenet name, tenet phone
ToDo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        property: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'property',
                key: 'address'
            }
        },
        todo_type: {
            type: DataTypes.STRING,
            allowNull: true
        },
        todo_text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tenet_name: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'tenet',
                key: 'tenet_name'
            }
        },
        tenet_phone: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'tenet',
                key: 'tenet_phone'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'todo'
    }
)

module.exports = ToDo;