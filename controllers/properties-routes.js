// Getting individual properties
// for individual viewing pages

const router = require('express').Router();
const sequelize = require('../config/connection');
const { Property } = require('../models');

router.get("/", (req, res) => {
    Property.findOne({
        where: {
            id: req.params.id,
          },
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
          ]
})
.then((dbPropertyData) => {
    if (!dbPropertyData) {
      res.status(404).json({ message: "no property found with this id" });
      return;
    }
    res.json(dbPropertyData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});