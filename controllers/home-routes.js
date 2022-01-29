const router = require('express').Router();
const sequelize = require('../config/connection');
const Property = require('../models');

router.get('/', (req, res) => {
    Property.findAll({
        attributes: [
            'bedrooms',
            'bathrooms',
            'rent',
            'sq_ft',
            'address_line1',
            'address_line2',
            'city',
            'state',
            'zip_code',
            'county',
        ]
    })
})
