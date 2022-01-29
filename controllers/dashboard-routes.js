const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, UserPerson, RoleType, Person, PropertyTenant } = require('../models');

