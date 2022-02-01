const { UserPerson } = require("../models");

const userPersonData = [
  {
    person_id: 1,
    user_id: 3,
  },
  {
    person_id: 2,
    user_id: 4,
  },
  {
    person_id: 3,
    user_id: 5,
  },
  {
    person_id: 4,
    user_id: 6,
  },
  {
    person_id: 5,
    user_id: 7,
  },
  {
    person_id: 6,
    user_id: 8,
  },
  {
    person_id: 7,
    user_id: 1,
  },
  {
    person_id: 8,
    user_id: 2,
  },
];

const seedUserPerson = () => UserPerson.bulkCreate(userPersonData);

module.exports = seedUserPerson;
