const router = require("express").Router();

const { RequestType } = require("../../models");

router.get("/", (req, res) => {
  RequestType.findAll({
    attributes: ["id", "category", "description"],
  })
    .then((dbRequestTypeData) => res.json(dbRequestTypeData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  console.log(`\n----------\n\n ${req.params.id}\n\n`);
  RequestType.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "category", "description"],
  })
    .then((dbRequestTypeData) => {
      console.log("READING SQL DTA \n\n");
      console.log(dbRequestTypeData);
      if (!dbRequestTypeData) {
        res.status(404).json({ message: "No RequestType found with this id" });
        return;
      }
      res.json(dbRequestTypeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  RequestType.create({
    category: req.body.category,
    description: req.body.description,
  })
    .then((dbRequestTypeData) => res.json(dbRequestTypeData))
    .catch((err) => {
      console.log(err);
      res.json(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  RequestType.update(req.body, {
    where: {
      id: req.params.id,
    },
  })

    .then((dbRequestTypeData) => {
      if (!dbRequestTypeData[0]) {
        res.status(404).json({
          message: "no Workorder found with that id",
        });
        return;
      }
      res.json(dbRequestTypeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  RequestType.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbRequestTypeData) => {
      if (!dbRequestTypeData) {
        res.status(404).json({
          message: "no Workorder found with this id",
        });
        return;
      }
      res.json(dbRequestTypeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
