const router = require("express").Router();

const { RoleType } = require("../../models");

router.get("/", (req, res) => {
  RoleType.findAll({
    attributes: ["id", "category", "description"],
  })
    .then((dbRoleTypeData) => res.json(dbRoleTypeData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  console.log(`\n----------\n\n ${req.params.id}\n\n`);
  RoleType.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "category", "description"],
  })
    .then((dbRoleTypeData) => {
      console.log("READING SQL DTA \n\n");
      console.log(dbRoleTypeData);
      if (!dbRoleTypeData) {
        res.status(404).json({ message: "No RoleType found with this id" });
        return;
      }
      res.json(dbRoleTypeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  RoleType.create({
    category: req.body.category,
    description: req.body.description,
  })
    .then((dbRoleTypeData) => res.json(dbRoleTypeData))
    .catch((err) => {
      console.log(err);
      res.json(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  RoleType.update(req.body, {
    where: {
      id: req.params.id,
    },
  })

    .then((dbRoleTypeData) => {
      if (!dbRoleTypeData[0]) {
        res.status(404).json({
          message: "no Workorder found with that id",
        });
        return;
      }
      res.json(dbRoleTypeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  RoleType.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbRoleTypeData) => {
      if (!dbRoleTypeData) {
        res.status(404).json({
          message: "no Workorder found with this id",
        });
        return;
      }
      res.json(dbRoleTypeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
