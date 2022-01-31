const router = require("express").Router();
// const { default: ModelManager } = require("sequelize/dist/lib/model-manager");
const sequelize = require("../config/connection");
const {
  Request
} = require("../models");
const withAuth = require("../utils/auth");
//Get Routes

router.get("/", (req, res) => {
  Request.findAll({
      attributes: ["id", "request_message"],
      include: [{
        all: true,
        nested: false
      }],
    })
    .then((dbRequestData) => {
      const requests = dbRequestData.map((post) => post.get({
        plain: true
      }));
      res.render("dashboard", {
        requests,
        loggedIn: req.session.loggedIn
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.get("/:id", (req, res) => {
  Request.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "request_message", "created_at", "updated_at"],
      include: [{
        all: true,
        nested: false
      }],
    })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Request.create({
      property_id: req.body.property_id,
      request_type_id: req.body.request_type_id,
      request_message: req.body.request_message,
      status_type_id: req.body.status_type_id,
      work_order_type_id: req.body.work_order_type_id,
    })
    .then((dbRequestData) => res.json(dbRequestData))
    .catch((err) => {
      console.log(err);
      res.json(500).json(err);
    });
});

//Put Routes
router.put("/:id", (req, res) => {
  Request.update(req.body, {
      where: {
        id: req.params.id,
      },
    })

    .then((dbRequestData) => {
      if (!dbRequestData[0]) {
        res.status(404).json({
          message: "no request found with that id",
        });
        return;
      }
      res.json(dbRequestData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Delete Routes

router.delete("/:id", (req, res) => {
  Request.destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((dbRequestData) => {
      if (!dbRequestData) {
        res.status(404).json({
          message: "no request found with this id"
        });
        return;
      }
      res.json(dbRequestData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;