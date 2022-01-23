const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Person extends Model {}
// name, contact info - phone and email, property,
//Person Model created to hold generic person information site wide
//such as Owner, Maintenance, Tenet, ect.
Person.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        validatePhone: function (number) {
          if (!/\d\d\d-\d\d\d-\d\d\d\d/.test(number)) {
            throw new Error(
              "Phone number must be formatted as the following: 000-000-0000"
            );
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "person",
  }
);
module.exports = Person;
