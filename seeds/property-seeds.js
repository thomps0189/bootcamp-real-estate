const { Property } = require('../models');

const propertyData = [
    {
        address: '2301 A Knowles Ave, Nashville, TN 37204',
        house_type: 'duplex',
        bedrooms: 4,
        bathrooms: 4,
        sq_ft: 2000,
        tenet_name: 'Jack Nicholson'
    },
    {
        address: '2301 B Knowles Ave, Nashville, TN 37204',
        house_type: 'duplex',
        bedrooms: 2,
        bathrooms: 2,
        sq_ft: 1500,
        tenet_name: 'Marlon Brando' 
    },
    {
        address: '2303 A Knowles Ave, Nashville, TN 37204',
        house_type: 'duplex',
        bedrooms: 2,
        bathrooms: 2,
        sq_ft: 1800,
        tenet_name: 'Meryl Streep'
    },
    {
        address: '2303 B Knowles Ave, Nashville, TN 37204',
        house_type: 'duplex',
        bedrooms: 3,
        bathrooms: 2.5,
        sq_ft: 2500,
        tenet_name: 'Vivien Leigh'
    },
    {
        address: '906 A Gale Ln, Nashville, TN 37204',
        house_type: 'duplex',
        bedrooms: 4,
        bathrooms: 4,
        sq_ft: 2000,
        tenet_name: 'Audrey Hepburn'
    },
    {
        address: '906 B Gale Ln, Nashville, TN 37204',
        house_type: 'duplex',
        bedrooms: 3,
        bathrooms: 3.5,
        sq_ft: 3000,
        tenet_name: 'Robert De Niro'
    }
];

const seedProperties = () => Property.bulkCreate(propertyData);

module.exports = seedProperties;