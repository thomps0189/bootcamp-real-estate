const { Request } = require("../models");

const requestData = [
  {
    property_id: "1",
    request_type_id: 1, //'maintenance',
    request_message: "please change air filters in the ac vents",
    status_type_id: 2,
    work_order_type_id: 1,
  },
  {
    property_id: "5",
    request_type_id: 2, //"service request",
    request_message: "my dryer stopped working",
    status_type_id: 1,
    work_order_type_id: 1,
  },
  {
    property_id: "6",
    request_type_id: 2, //"service request",
    request_message: "the sink is clogged",
    status_type_id: 3,
    work_order_type_id: 2,
  },
];

const seedRequests = () => Request.bulkCreate(requestData);

module.exports = seedRequests;
