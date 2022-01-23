const PropertyType = require("./PropertyType");
const RequestType = require("./RequestType");
const StatusType = require("./StatusType");
const WorkOrderType = require("./WorkOrderType");

const Address = require("./Address");
const Property = require("./Property");
const Request = require("./Request");
const WorkOrder = require("./WorkOrder");
const Person = require("./Person");
const UserRole = require("./UserRole");
const User = require("./User");

// Tenents belong to a property, tenet has one property, property has many requests, request belongs to property, todo has many properties,

// User.belongsTo(Person, {
//   foreignKey: "user_id",
// });
// Person.hasOne(User, {
//   foreignKey: "user_id",
// });

// Person.belongsTo(Property, {
//   foreignKey: "person_id",
// });

PropertyType.hasMany(Property, {
  foreignKey: "property_type_id",
});

// Address.belongsTo(Property, {
//   foreignKey: "address_id",
// });

Property.hasMany(Request, {
  foreignKey: "property_id",
});

RequestType.hasMany(Request, {
  foreignKey: "request_type_id",
});

StatusType.hasMany(Request, {
  foreignKey: "status_types_id",
});

UserRole.hasMany(User, {
  foreignKey: "user_role_id",
});

Property.hasMany(WorkOrder, {
  foreignKey: "property_id",
});

WorkOrderType.hasMany(WorkOrder, {
  foreignKey: "work_order_type_id",
});

Request.hasMany(WorkOrder, {
  foreignKey: "request_id",
});

StatusType.hasMany(WorkOrder, {
  foreignKey: "status_type_id",
});
// Property.belongsTo(Tenet, {
//   foreignKey: "tenet_property",
// });

// Tenet.belongsTo(Property, {
//   foreignKey: "id",
// });

// Property.hasMany(Request, {
//   foreignKey: "id",
// });

// Request.belongsTo(Property, {
//   foreignKey: "address",
// });

// ToDo.hasMany(Property, {
//   foreignKey: "address",
// });

module.exports = {
  Property,
  Request,
  Person,
  User,
  Address,
  WorkOrder,
  WorkOrderType,
  PropertyType,
  StatusType,
  RequestType,
  UserRole,
};
