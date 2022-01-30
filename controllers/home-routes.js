// Getting All Properties for homepage

const router = require('express').Router();
const sequelize = require('../config/connection');
const Property = require('../models');

router.get("/", (req, res) => {
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
            'zipcode',
            'county',
        ]
        
    })
    .then((dbPropertyData) => res.json(dbPropertyData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

modules.exports = router;