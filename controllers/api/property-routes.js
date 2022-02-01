const router = require("express").Router();
const req = require("express/lib/request");
const { Property } = require("../../models");

router.get("/", (req, res) => {
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

router.get("/:id", (req, res) => {
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
    ],
    include: [{ all: true, nested: false }],
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

//Post routes

router.post("/", (req, res) => {
  //  console.log(req.body)
  Property.create({
    bedrooms: req.body.bedrooms,
    bathrooms: req.body.bathrooms,
    rent: req.body.rent,
    sq_ft: req.body.sq_ft,
    address_line1: req.body.address_line1,
    address_line2: req.body.address_line2,
    city: req.body.city,
    state: req.body.state,
    zip_code: req.body.zip_code,
    county: req.body.county,
  })
    .then((dbPropertyData) => res.json(dbPropertyData))
    .catch((err) => {
      console.log(err);
      res.json(500).json(err);
    });
});

//Put Routes

router.put("/:id", (req, res) => {
  Property.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbPropertyData) => {
      if (!dbPropertyData[0]) {
        res.status(404).json({
          message: "no property found with that id",
        });
        return;
      }
      res.json(dbPropertyData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Delete Routes

router.delete("/:id", (req, res) => {
  Property.destroy({
    where: {
      id: req.params.id,
    },
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

module.exports = router;
