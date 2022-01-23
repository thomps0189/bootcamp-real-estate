const seedProperties = require("./property-seeds");
const seedPerson = require("./person-seeds");
//const seedUser = require("./")
const seedRoleTypes = require("./role-type-seeds");
const seedToDo = require("./to-do-seeds");
const seedRequests = require("./request-seeds");
const requestTypeSeeds = require("./request-type-seeds");
const seedStatusTypes = require("./status-type-seeds");
const sequelize = require("../config/connection");
const seedPropertyTypes = require("./property-type-seeds");
const seedrequestTypes = require("./request-type-seeds");
//const { combineTableNames } = require("sequelize/dist/lib/utils");
const seedstatusTypes = require("./status-type-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedPropertyTypes();
  console.log("\n----- PROPERTIES TYPES SEEDED -----\n");

  await seedrequestTypes();
  console.log("\n----- REQUEST TYPES SEEDED -----\n");

  await seedStatusTypes();
  console.log("\n----- STATUS TYPES SEEDED -----\n");

  await seedRoleTypes();
  console.log("\n----- ROLE TYPES SEEDED -----\n");

  await seedProperties();
  console.log("\n----- PROPERTIES SEEDED -----\n");

  await seedRequests();
  console.log("\n----- REQUEST SEEDED -----\n");

  await seedPerson();
  console.log("\n----- PERSON SEEDED -----\n");

  // await seedUser();
  // console.log("\n----- USER SEEDED -----\n");

  // await seedTenet();
  // console.log('\n----- TENET SEEDED -----\n');

  // await seedRequests();
  // console.log('\n----- REQUEST SEEDED -----\n');

  // await seedToDo();
  // console.log('\n----- TO-DO SEEDED -----\n');

  process.exit(0);
};

seedAll();
