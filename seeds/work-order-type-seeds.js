const { WorkOrderType } = require("../models");

const WorkOrderTypeData = [
  {
    category: "tenant requests",
    description: "A tenant requested work order.",
  },
  {
    category: "owner requested",
    description: "A owner requested work order.",
  },
];

const seedworkOrderTypes = () => WorkOrderType.bulkCreate(WorkOrderTypeData);

module.exports = seedworkOrderTypes;
