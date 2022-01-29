const PropertyType = require("./PropertyType");
const RequestType = require("./RequestType");
const StatusType = require("./StatusType");
const WorkOrderType = require("./WorkOrderType");
const PropertyTenant = require("./PropertyTenant");
const Property = require("./Property");
const Request = require("./Request");
const Person = require("./Person");
const RoleType = require("./RoleType");
const User = require("./User");
const UserPerson = require("./UserPerson");

// Tenents belong to a property, tenant has one property, property has many requests, request belongs to property, todo has many properties,

User.belongsToMany(Person, {
  through: UserPerson,
  as: "person",
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Person.belongsToMany(User, {
  through: UserPerson,
  as: "user",
  foreignKey: "person_id",
  onDelete: "CASCADE",
});

Property.belongsToMany(Person, {
  through: PropertyTenant,
  as: "persons",
  foreignKey: "property_id",
  onDelete: "CASCADE",
});

Person.belongsToMany(Property, {
  through: PropertyTenant,
  as: "property",
  foreignKey: "person_id",
  onDelete: "CASCADE",
});

PropertyType.hasMany(Property, {
  foreignKey: "property_type_id",
  onDelete: "SET NULL",
});

Property.hasMany(Request, {
  foreignKey: "property_id",
});

RequestType.hasMany(Request, {
  foreignKey: "request_type_id",
  onDelete: "SET NULL",
});

StatusType.hasMany(Request, {
  foreignKey: "status_type_id",
  onDelete: "SET NULL",
});

WorkOrderType.hasMany(Request, {
  foreignKey: "work_order_type_id",
  onDelete: "SET NULL",
});

User.belongsTo(RoleType, {
  foreignKey: "role_type_id",
  onDelete: "SET NULL",
});

Request.belongsTo(Property, {
  foreignKey: "property_id",
});


// RoleType.belongsTo(User, {
//   foreignKey: "role_type_id",
//   onDelete: "SET NULL",
// });

// Property.hasMany(WorkOrder, {
//   foreignKey: "property_id",
// });

// WorkOrderType.hasMany(WorkOrder, {
//   foreignKey: "work_order_type_id",
// });

// Request.hasMany(WorkOrder, {
//   foreignKey: "request_id",
// });

// StatusType.hasMany(WorkOrder, {
//   foreignKey: "status_type_id",
// });
// Property.belongsTo(Tenant, {
//   foreignKey: "tenant_property",
// });

// Tenant.belongsTo(Property, {
//   foreignKey: "id",
// });

// Property.hasMany(Request, {
//    foreignKey: "id",
//  });

// ToDo.hasMany(Property, {
//   foreignKey: "address",
// });

module.exports = {
  Property,
  Request,
  Person,
  User,
  WorkOrderType,
  PropertyType,
  StatusType,
  RequestType,
  RoleType,
  PropertyTenant,
  UserPerson,
};
