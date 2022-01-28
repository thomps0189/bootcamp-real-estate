const router = require("express").Router();
//const req = require("express/lib/request");
const { WorkOrderType } = require("../../models");

//Get Routes

router.get("/", (req, res) => {
  WorkOrderType.findAll({
    attributes: ["id", "category", "description"],
  })
    .then((dbWorkOrderTypeData) => res.json(dbWorkOrderTypeData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  console.log(`\n----------\n\n ${req.params.id}\n\n`);
  WorkOrderType.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "category", "description"],
  })
    .then((dbWorkOrderTypeData) => {
      console.log("READING SQL DTA \n\n");
      console.log(dbWorkOrderTypeData);
      if (!dbWorkOrderTypeData) {
        res
          .status(404)
          .json({ message: "No WorkOrderType found with this id" });
        return;
      }
      res.json(dbWorkOrderTypeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//WorkOrderType routes
router.post("/", (req, res) => {
  WorkOrderType.create({
    category: req.body.category,
    description: req.body.description,
  })
    .then((dbWorkOrderTypeData) => res.json(dbWorkOrderTypeData))
    .catch((err) => {
      console.log(err);
      res.json(500).json(err);
    });
});

//Put Routes

router.put("/:id", (req, res) => {
  WorkOrderType.update(req.body, {
    where: {
      id: req.params.id,
    },
  })

    .then((dbWorkOrderTypeData) => {
      if (!dbWorkOrderTypeData[0]) {
        res.status(404).json({
          message: "no Workorder found with that id",
        });
        return;
      }
      res.json(dbWorkOrderTypeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Delete Routes

router.delete("/:id", (req, res) => {
  WorkOrderType.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbWorkOrderTypeData) => {
      if (!dbWorkOrderTypeData) {
        res.status(404).json({
          message: "no Workorder found with this id",
        });
        return;
      }
      res.json(dbWorkOrderTypeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
