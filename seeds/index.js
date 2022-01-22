const seedProperties = require('./property-seeds');
const seedTenet = require('./tenet-seeds');
const seedToDo = require('./to-do-seeds');
const seedRequests = require('./request-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedProperties();
    console.log('\n----- PROPERTIES SEEDED -----\n');

    await seedTenet();
    console.log('\n----- TENET SEEDED -----\n');

    await seedRequests();
    console.log('\n----- REQUEST SEEDED -----\n');

    await seedToDo();
    console.log('\n----- TO-DO SEEDED -----\n');

    process.exit(0);
};

seedAll();