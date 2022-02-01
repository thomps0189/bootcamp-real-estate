const seedProperties = require("./property-seeds");
const seedPerson = require("./person-seeds");
const seedUser = require("./user-seeds");
const seedRoleTypes = require("./role-type-seeds");
const seedRequests = require("./request-seeds");
const seedStatusTypes = require("./status-type-seeds");
const sequelize = require("../config/connection");
const seedPropertyTypes = require("./property-type-seeds");
const seedrequestTypes = require("./request-type-seeds");
const seedWorkOrderTypes = require("./work-order-type-seeds");
const seedUserPerson = require("./user-person-seeds");
const seedPropertyTenant = require("./property-tenant-seeds");

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

  await seedWorkOrderTypes();
  console.log("\n----- WORK ORDER TYPES SEEDED -----\n");

  await seedPerson();
  console.log("\n----- PERSON SEEDED -----\n");

  await seedUser();
  console.log("\n----- USER SEEDED -----\n");

  await seedUserPerson();
  console.log("\n----- USER PERSON SEEDED -----\n");

  await seedProperties();
  console.log("\n----- PROPERTIES SEEDED -----\n");

  await seedPropertyTenant();
  console.log("\n----- PROPERTY TENET SEEDED -----\n");

  await seedRequests();
  console.log("\n----- REQUEST SEEDED -----\n");

  process.exit(0);
};

seedAll();
