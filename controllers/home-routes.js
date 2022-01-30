// Getting All Properties for homepage

const router = require("express").Router();
const sequelize = require("../config/connection");
const { Property } = require("../models");

router.get('/', (req, res) => {
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

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;