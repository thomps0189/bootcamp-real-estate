const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Request extends Model {}
// property, type, tenant name, message
Request.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    property_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "property",
        key: "id",
      },
    },
    request_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "request_type",
        key: "id",
      },
    },
    request_message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "status_type",
        key: "id",
      },
    },
    work_order_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "work_order_type",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "request",
  }
);

module.exports = Request;

//FIND OUT ABOUT MULTIPLE KEYS
