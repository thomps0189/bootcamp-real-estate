const { Request } = require('../models');

const requestData = [
    {
        property: '1',
        request_type: 'maintenance',
        tenet_name: 'Jack Nicholson',
        tenet_phone: '615-555-1111',
        request_message: 'please change air filters in the ac vents'
    },
    {
        property: '5',
        request_type: 'service request',
        tenet_name: 'Audrey Hepburn',
        tenet_phone: '615-555-5555',
        request_message: 'my dryer stopped working'
    },
    {
        property: '6',
        request_type: 'service request',
        tenet_name: 'Robert De Niro',
        tenet_phone: '615-555-6666',
        request_message: 'the sink is clogged'
    }
];

const seedRequests = () => Request.bulkCreate(requestData);

module.exports = seedRequests;