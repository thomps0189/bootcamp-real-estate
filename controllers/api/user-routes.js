const router = require("express").Router();
const { User, Person, UserRole } = require("../../models");

router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "username", "password", "role_type_id"],

    include: [{ all: true, nested: false }],
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "no property found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Post routes

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
  const result = await User.findOne({
    where: { email: req.body.email },
  })
    .then((dbPropertytenantData) => res.json(dbPropertytenantData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  console.log("server side login function has been called");
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    console.log("finished the User.findOne function");
    if (!dbUserData) {
      console.log("user wasn't found");
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }

    console.log("validating user password");
    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      console.log("bad password");
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: "You are now logged in!" });
    });
    console.log("new session saved");
  });
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
//Put Routes

router.put("/:id", (req, res) => {
  User.update(req.body, {
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
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "no property found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
