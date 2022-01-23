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
    address_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "address",
        key: "id",
      },
    },
    property_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    person_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "tenet_id",
      references: {
        model: "person",
        key: "id",
      },
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
