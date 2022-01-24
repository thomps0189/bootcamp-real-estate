const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Property extends Model {}
// id, address, type(duplex, single,etc), bedrooms, bath, rent, sq ft
Property.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    property_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "property_type",
        key: "id",
      },
    },
    bedrooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bathrooms: {
      type: DataTypes.DECIMAL(3, 1),
      allowNull: false,
    },
    rent: {
      type: DataTypes.DECIMAL(7, 2),
      allowNull: false,
    },
    sq_ft: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address_line1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address_line2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2],
      },
    },
    zip_code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5],
      },
    },
    county: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "property",
  }
);

module.exports = Property;
