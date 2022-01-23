const PropertyType = require("./PropertyType");
const RequestType = require("./RequestType");
const StatusType = require("./StatusType");
const WorkOrderType = require("./WorkOrderType");
const PropertyTenet = require("./PropertyTenet");
const Property = require("./Property");
const Request = require("./Request");
const WorkOrder = require("./WorkOrder");
const Person = require("./Person");
const RoleType = require("./RoleType");
const User = require("./User");
const UserPerson = require("./UserPerson");

// Tenents belong to a property, tenet has one property, property has many requests, request belongs to property, todo has many properties,

User.belongsTo(Person, {
  through: UserPerson,
  as: "person",
  foreignKey: "user_id",
  onDelete: "SET NULL",
  //   constraints: false,
});

// Person.belongsTo(User, {
//   through: UserPerson,
//   as: "user",
//   foreignKey: "person_id",
//   onDelete: "SET NULL",
//   //   constraints: false,
// });

// Property.belongsToMany(Person, {
//   through: PropertyTenet,
//   as: "persons",
//   foreignKey: "person_id",
//   onDelete: "CASCADE",
// });

// Person.belongsTo(Property, {
//   through: PropertyTenet,
//   as: "property",
//   foreignKey: "property_id",
//   onDelete: "CASCADE",
// });

PropertyType.hasMany(Property, {
  foreignKey: "property_type_id",
});

Property.hasMany(Request, {
  foreignKey: "property_id",
});

RequestType.hasMany(Request, {
  foreignKey: "request_type_id",
});

StatusType.hasMany(Request, {
  foreignKey: "status_types_id",
});

User.belongsTo(RoleType, {
  foreignKey: "role_type_id",
  onDelete: "SET NULL",
});

// RoleType.belongsTo(User, {
//   foreignKey: "role_type_id",
//   onDelete: "SET NULL",
// });

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
  WorkOrder,
  WorkOrderType,
  PropertyType,
  StatusType,
  RequestType,
  RoleType,
};
