const { User } = require("../models");

const userData = [
  {
    username: "KingPin",
    email: "ghost-buster-V@theman.com",
    password: "1234",
    role_type_id: 3,
  },
  {
    username: "WilliesGrounds",
    email: "WillyKeepsitReal@scotty.com",
    password: "1234",
    role_type_id: 2,
  },
  {
    username: "Joker89",
    email: "dull-boy@overlook.com",
    password: "1234",
    role_type_id: 1,
  },
  {
    username: "JorEl79",
    email: "mbrando@nola.com",
    password: "1234",
    role_type_id: 1,
  },
  {
    username: "PradaDevil",
    email: "merylstreep@vogue.com",
    password: "1234",
    role_type_id: 1,
  },
  {
    username: "WindLook",
    email: "vivandlarry@durhamcottage.com",
    password: "1234",
    role_type_id: 1,
  },
  {
    username: "TiffanyBacon",
    email: "breakfast@tiffanys.com",
    password: "1234",
    role_type_id: 1,
  },
  {
    username: "Bickle43",
    email: "robertdeniro@email.com",
    password: "1234",
    role_type_id: 1,
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
