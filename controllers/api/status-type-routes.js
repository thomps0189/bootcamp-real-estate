const router = require("express").Router();

const { StatusType } = require("../../models");

router.get("/", (req, res) => {
  StatusType.findAll({
    attributes: ["id", "category", "description"],
  })
    .then((dbStatusTypeData) => res.json(dbStatusTypeData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  console.log(`\n----------\n\n ${req.params.id}\n\n`);
  StatusType.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "category", "description"],
  })
    .then((dbStatusTypeData) => {
      console.log("READING SQL DTA \n\n");
      console.log(dbStatusTypeData);
      if (!dbStatusTypeData) {
        res.status(404).json({ message: "No StatusType found with this id" });
        return;
      }
      res.json(dbStatusTypeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  StatusType.create({
    category: req.body.category,
    description: req.body.description,
  })
    .then((dbStatusTypeData) => res.json(dbStatusTypeData))
    .catch((err) => {
      console.log(err);
      res.json(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  StatusType.update(req.body, {
    where: {
      id: req.params.id,
    },
  })

    .then((dbStatusTypeData) => {
      if (!dbStatusTypeData[0]) {
        res.status(404).json({
          message: "no Workorder found with that id",
        });
        return;
      }
      res.json(dbStatusTypeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  StatusType.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbStatusTypeData) => {
      if (!dbStatusTypeData) {
        res.status(404).json({
          message: "no Workorder found with this id",
        });
        return;
      }
      res.json(dbStatusTypeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
