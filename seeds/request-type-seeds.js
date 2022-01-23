const { RequestType } = require("../models");

const requestTypeData = [
  {
    category: "service request",
    description: "A request from a tenet for a particular property problem.",
  },
  {
    category: "maintenance",
    description: "Scheduled work..",
  },
];

const seedrequestTypes = () => RequestType.bulkCreate(requestTypeData);

module.exports = seedrequestTypes;
