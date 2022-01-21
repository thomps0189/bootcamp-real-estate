const Property = require('./Property');
const Request = require('./Request');
const Tenet = require('./Tenet');
const ToDo = require('./To-do');

// Property has many tenets, tenet has one property, property has many requests, request belongs to property, todo has many properties, 

Property.belongsTo(Tenet, {
    foreignKey: 'tenet_property'
});

Tenet.belongsTo(Property, {
    foreignKey: 'id'
});

Property.hasMany(Request, {
    foreignKey: 'id'
});

Request.belongsTo(Property, {
    foreignKey: 'address'
});

ToDo.hasMany(Property, {
    foreignKey: 'address'
});

module.exports = { Property, Tenet, ToDo, Request };