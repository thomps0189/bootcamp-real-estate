const router = require('express').Router();
const sequelize = require('../config/connection');
const { Property } = require('../models');
const withAuth = require('../utils/auth');
//Get Routes

router.get('/', withAuth, (req, res) => {
        Property.findAll({
            attributes: [
              "id",
              "bedrooms",
              "bathrooms",
              "rent",
              "sq_ft",
              "address_line1",
              "address_line2",
              "city",
              "state",
              "zip_code",
              "county",
            ],
            include: [{ all: true, nested: false }],
          })
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => {
              console.log(err);
              res.status(500).json(err);
            });
        });