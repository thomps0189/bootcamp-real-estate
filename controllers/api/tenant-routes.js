const router = require("express").Router();
const req = require("express/lib/request");
const {
  User,
  Person,
  UserRole,
  PropertyType,
  Property,
  PropertyTenant,
} = require("../../models");
const { create } = require("../../models/PropertyType");

//Get Routes

router.get("/", (req, res) => {
  PropertyTenant.findAll({
    include: {
      model: PropertyTenant,
      attributes: ["id", "property_id", "person_id"],
    },
  });
});

router.get("/:id", (req, res) => {
  PropertyTenant.findOne({
    include: {
      model: PropertyTenant,
      attributes: ["id", "property_id", "person_id"],
    },
  })
    .then((dbPropertytenantData) => {
      if (!dbPropertytenantData) {
        res.status(404).json({ message: "no tenant found with this id" });
        return;
      }
      res.json(dbPropertytenantData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Post Routes

router.post("/", (req, res) => {
  PropertyTenant.create({
    property_id: req.body.property_id,
    person_id: req.body.person_id,
  })
    .then((dbPropertytenantData) => res.json(dbPropertytenantData))
    .catch((err) => {
      console.log(err);
      res.json(500).json(err);
    });
});

//Update Routes

router.put("/:id", (req, res) => {
  PropertyTenant.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbPropertytenantData) => {
      if (!dbPropertytenantData[0]) {
        res.status(404).json({
          message: "no tenant found with that id",
        });
        return;
      }
      res.json(dbPropertytenantData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Delete Routes

router.delete("/:id", (req, res) => {
  PropertyTenant.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPropertytenantData) => {
      if (!dbPropertytenantData) {
        res.status(404).json({ message: "no tenant found with this id" });
        return;
      }
      res.json(dbPropertytenantData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
