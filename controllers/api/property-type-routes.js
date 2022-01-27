const router = require("express").Router();

const { PropertyType } = require("../../models");

router.get("/", (req, res) => {
  PropertyType.findAll({
    attributes: ["id", "category", "description"],
  })
    .then((dbPropertyTypeData) => res.json(dbPropertyTypeData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  console.log(`\n----------\n\n ${req.params.id}\n\n`);
  PropertyType.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "category", "description"],
  })
    .then((dbPropertyTypeData) => {
      console.log("READING SQL DTA \n\n");
      console.log(dbPropertyTypeData);
      if (!dbPropertyTypeData) {
        res.status(404).json({ message: "No PropertyType found with this id" });
        return;
      }
      res.json(dbPropertyTypeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  PropertyType.create({
    category: req.body.category,
    description: req.body.description,
  })
    .then((dbPropertyTypeData) => res.json(dbPropertyTypeData))
    .catch((err) => {
      console.log(err);
      res.json(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  PropertyType.update(req.body, {
    where: {
      id: req.params.id,
    },
  })

    .then((dbPropertyTypeData) => {
      if (!dbPropertyTypeData[0]) {
        res.status(404).json({
          message: "no Workorder found with that id",
        });
        return;
      }
      res.json(dbPropertyTypeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  PropertyType.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPropertyTypeData) => {
      if (!dbPropertyTypeData) {
        res.status(404).json({
          message: "no Workorder found with this id",
        });
        return;
      }
      res.json(dbPropertyTypeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
