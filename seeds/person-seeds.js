const { Person } = require("../models");

const personData = [
  {
    first_name: "Jack",
    last_name: "Nicholson",
    phone: "615-555-1111",
    email: "dull-boy@overlook.com",
  },
  {
    first_name: "Marlon",
    last_name: "Brando",
    phone: "615-555-2222",
    email: "mbrando@nola.com",
  },
  {
    first_name: "Meryl",
    last_name: "Streep",
    phone: "615-555-3333",
    email: "merylstreep@vogue.com",
  },
  {
    first_name: "Viven",
    last_name: "Leigh",
    phone: "615-555-4444",
    email: "vivandlarry@durhamcottage.com",
  },
  {
    first_name: "Audrey",
    last_name: "Hepburn",
    phone: "615-555-5555",
    email: "breakfast@tiffanys.com",
  },
  {
    first_name: "Robert",
    last_name: "De Niro",
    phone: "615-555-6666",
    email: "robertdeniro@email.com",
  },
  {
    first_name: "Bill",
    last_name: "Murray",
    phone: "615-555-7777",
    email: "ghost-buster-V@theman.com",
  },
  {
    first_name: "GroundsKeeper",
    last_name: "Willy",
    phone: "615-555-8888",
    email: "WillyKeepsitReal@scotty.com",
  },
];

const seedPerson = () => Person.bulkCreate(personData);

module.exports = seedPerson;
