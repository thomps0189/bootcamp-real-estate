// Getting All Properties for homepage

const router = require("express").Router();
const sequelize = require("../config/connection");
const { Property, Request } = require("../models");

router.get("/", (req, res) => {
  Property.findAll({
    attributes: [
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
  })
    .then((dbPropertyData) => {
      const posts = dbPropertyData.map((post) => post.get({ plain: true }));
      res.render("homepage", { posts, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    console.log("REDIRECTING");
    res.redirect("/");
    return; //removing return causes an error
  }
  console.log("Rendinging the login page");
  res.render("login");
});

router.get("/request/:id", (req, res) => {
  Request.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "request_message", "created_at", "updated_at"],
    include: [{ all: true, nested: false }],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      // serialize the data
      const post = dbPostData.get({ plain: true });

      // pass data to template
      res.render("single-request", { post, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/requests", (req, res) => {
    Request.findAll({
      attributes: ["id", "request_message", "created_at", "updated_at"],
      include: [{ all: true, nested: false }],
    })
      .then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({ message: "No post found with this id" });
          return;
        }
  
        // serialize the data
        const post = dbPostData.get({ plain: true });
  
        // pass data to template
        res.render("single-request", { post, loggedIn: req.session.loggedIn });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.post("/requests", (req, res) => {
    Request.create({
        property_id: req.body.property_id,
        name: req.body.name,
        email: req.body.email,
        request_message: req.body.request_message
      })
        .then((dbRequestData) => res.json(dbRequestData))
        .catch((err) => {
          console.log(err);
          res.json(500).json(err);
        });
    });


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;

