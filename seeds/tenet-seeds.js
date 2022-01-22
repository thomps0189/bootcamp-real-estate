const { Tenet } = require('../models');

const tenetData = [
    {
        tenet_name: 'Jack Nicholson',
        tenet_phone: '615-555-1111',
        tenet_email: 'dull-boy@overlook.com',
        tenet_property: '2301 A Knowles Ave, Nashville, TN 37204'
    },
    {
        tenet_name: 'Marlon Brando',
        tenet_phone: '615-555-2222',
        tenet_email: 'mbrando@nola.com',
        tenet_property: '2301 B Knowles Ave, Nashville, TN 37204'
    },
    {
        tenet_name: 'Meryl Streep',
        tenet_phone: '615-555-3333',
        tenet_email: 'merylstreep@vogue.com',
        tenet_property: '2303 B Knowles Ave, Nashville, TN 37204'
    },
    {
        tenet_name: 'Viven Leigh',
        tenet_phone: '615-555-4444',
        tenet_email: 'vivandlarry@durhamcottage.com',
        tenet_property: '2303 B Knowles Ave, Nashville, TN 37204'
    },
    {
        tenet_name: 'Audrey Hepburn',
        tenet_phone: '615-555-5555',
        tenet_email: 'breakfast@tiffanys.com',
        tenet_property: '906 A Gale Ln, Nashville, TN 37204'
    },
    {
        tenet_name: 'Robert De Niro',
        tenet_phone: '615-555-6666',
        tenet_email: 'robertdeniro@email.com',
        tenet_property: '906 B Gale Ln, Nashville, TN 37204'
    }
];

const seedTenet = () => Tenet.bulkCreate(tenetData);

module.exports = seedTenet;