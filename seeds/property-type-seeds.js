const { PropertyType } = require("../models");

const propertyTypeData = [
  // {
  //   category: "unset",
  //   description: "default value when not properly set.",
  // },
  {
    category: "duplex",
    description:
      "A residential dwelling, usually split into a two family residence.",
  },
  {
    category: "condo",
    description:
      "A residential dwelling, usually setup like an apartment building.",
  },
  {
    category: "townhouse",
    description:
      "A tall, narrow row house. Usually having three or more floors.",
  },
];

const seedPropertyTypes = () => PropertyType.bulkCreate(propertyTypeData);

module.exports = seedPropertyTypes;
