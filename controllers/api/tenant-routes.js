const router = require("express").Router();
const req = require("express/lib/request");
const {
  User,
  Person,
  UserRole,
  PropertyType,
  Property,
  PropertyTenant,
  UserPerson,
} = require("../../models");
const { create } = require("../../models/PropertyType");

//Get Routes

router.get("/", (req, res) => {
  Person.findAll({
    attributes: ["id", "first_name", "last_name", "phone", "email"],
    include: [
      { all: true, nested: false },
      {
        model: User,
        through: UserPerson,
        where: { role_type_id: 1 },
        as: "user",
      },
    ],
  })
    .then((dbPropertytenantData) => res.json(dbPropertytenantData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Person.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "first_name", "last_name", "phone", "email"],
    include: [
      { all: true, nested: false },
      {
        model: User,
        through: UserPerson,
        where: { role_type_id: 1 },
        as: "user",
      },
    ],
  })
    .then((dbPropertytenantData) => {
      if (!dbPropertytenantData) {
        res.status(404).json({
          message: "no tenant found with this id",
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

//Post Routes

router.post("/", async (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  console.log(`username is  ----->>  ${username}`);
  console.log(`email is  ------>>  ${email}`);
  // create a new person
  const person = await Person.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone,
    email: req.body.email,
    property: req.body.property_id, // can leave as null/empty list,
  }).catch((err) => {
    console.log(err);
    res.json(500).json(err);
  });
  console.log("person created");

  // create a new user
  const newuser = await User.create({
    username: req.body.username,
    password: "1234",
    role_type_id: 1,
    email: req.body.email,
  }).catch((err) => {
    console.log(err);
    res.json(500).json(err);
  });
  console.log("user created");

  //associate the person with the user
  await person.addUser(newuser);
  console.log("user_person association created");

  // get the response object
  const result = await Person.findOne({
    where: { email: req.body.email },
  })
    .then((dbPropertytenantData) => res.json(dbPropertytenantData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Update Routes

router.put("/:id", (req, res) => {
  Person.update(req.body, {
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
  Person.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPropertytenantData) => {
      if (!dbPropertytenantData) {
        res.status(404).json({
          message: "no tenant found with this id",
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

module.exports = router;
