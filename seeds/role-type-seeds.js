const { RoleType } = require("../models");

const roleTypeData = [
  {
    category: "tenant",
    description: "Person or persons living in one of the properties..",
  },
  {
    category: "maintenance",
    description:
      "Person or persons responsible for maintaining the properties.",
  },
  {
    category: "owner",
    description: "Owner of the rental properties.",
  },
];

const seedRoleTypes = () => RoleType.bulkCreate(roleTypeData);

module.exports = seedRoleTypes;
