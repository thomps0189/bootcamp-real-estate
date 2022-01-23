const { PropertyTenant } = require("../models");

const propertyTenantData = [
  {
    person_id: 1,
    property_id: 1,
  },
  {
    person_id: 6,
    property_id: 1,
  },
  {
    person_id: 5,
    property_id: 3,
  },
  {
    person_id: 4,
    property_id: 4,
  },
  {
    person_id: 2,
    property_id: 5,
  },
  {
    person_id: 3,
    property_id: 3,
  },
];

const seedPropertyTenant = () => PropertyTenant.bulkCreate(propertyTenantData);

module.exports = seedPropertyTenant;
