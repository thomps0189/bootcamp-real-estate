const { StatusType } = require("../models");

const StatusTypeData = [
  {
    category: "reported",
    description: "A tenant request has been reported to the system.",
  },
  {
    category: "in progress",
    description: "Service in progress for reported problem.",
  },
  {
    category: "complete",
    description: "Reported request completed.",
  },
];

const seedstatusTypes = () => StatusType.bulkCreate(StatusTypeData);

module.exports = seedstatusTypes;
