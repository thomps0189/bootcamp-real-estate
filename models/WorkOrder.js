const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class WorkOrder extends Model {}
// property, type, text, tenet name, tenet phone
WorkOrder.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    property_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "property",
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
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    request_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "request",
        key: "id",
      },
    },
    status_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "status_type",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "work_order",
  }
);

module.exports = WorkOrder;
