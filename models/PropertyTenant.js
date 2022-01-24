const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class PropertyTenant extends Model {}

PropertyTenant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    property_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "property",
        key: "id",
      },
    },
    person_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "person",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "property_tenant",
  }
);

module.exports = PropertyTenant;
