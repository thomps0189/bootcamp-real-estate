//get profile and user related routes for dashboard

const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, UserPerson, RoleType, Person, PropertyTenant } = require('../models');

//Get Routes

router.get("/", (req, res) => {
    User.findAll({
        attributes: [
            'username',
            'email',
            'role_type_id',
            {exclude: [ 'password']}
        ]
    })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/", (req, res) => {
    UserPerson.findAll({
        attributes: [
            'user_id',
            'person_id',
        ]
    })
    .then((dbUserPersonData) => res.json(dbUserPersonData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/", (req, res) => {
    RoleType.findAll({
        attributes: [
            'user_id',
            'person_id',
        ]
    })
    .then((dbRoleTypeData) => res.json(dbRoleTypeData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/", (req, res) => {
    Person.findAll({
        attributes: [
            'first_name',
            'last_name',
            'phone',
            'email',
        ]
    })
    .then((dbPersonData) => res.json(dbPersonData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/", (req, res) => {
    PropertyTenant.findAll({
        attributes: [
            'property_id',
            'person_id',
        ]
    })
    .then((dbPropertyTenantData) => res.json(dbPropertyTenantData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
    User.findOne({
        attributes: [
            'username',
            'email',
            'role_type_id',
            { exclude: ['password']}
        ]
    })
    .then((dbUserData) => res.json(dbUserData))
    if (!dbUserData[0]) {
        res.status(404).json({
          message: "no user found with that id",
        });
        return;
      }
      res.json(dbUserData)
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
    UserPerson.findAll({
        attributes: [
            'user_id',
            'person_id',
        ]
    })
    .then((dbUserPersonData) => res.json(dbUserPersonData))
    if (!dbUserPersonData[0]) {
        res.status(404).json({
          message: "no user found with that id",
        });
        return;
      }
      res.json(dbUserPersonData)
    
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
    RoleType.findAll({
        attributes: [
            'user_id',
            'person_id',
        ]
    })
    .then((dbRoleTypeData) => res.json(dbRoleTypeData))
    if (!dbRoleTypeData[0]) {
        res.status(404).json({
          message: "no role type found with that id",
        });
        return;
    }
      res.json(dbRoleTypeData)
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
    Person.findAll({
        attributes: [
            'first_name',
            'last_name',
            'phone',
            'email',
        ]
    })
    .then((dbPersonData) => res.json(dbPersonData))
    if (!dbPersonData[0]) {
        res.status(404).json({
          message: "no person found with that id",
        });
        return;
      }
      res.json(dbPersonData)
    
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
    PropertyTenant.findAll({
        attributes: [
            'property_id',
            'person_id',
        ]
    })
    .then((dbPropertyTenantData) => res.json(dbPropertyTenantData))
    if (!dbPropertyTenantData[0]) {
        res.status(404).json({
          message: "no Tenant found with that id",
        });
        return;
      }
      res.json(dbPropertyTenantData)
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


modules.export = router;