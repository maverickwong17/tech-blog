const seedUsers = require('./userData-seed')
const seedPosts = require('./postData-seed')
const seedComments = require('./commentData-seed')

const sequelize = require('../config/connection');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  await seedComments();
  console.log('\n----- Comments SEEDED -----\n');

  process.exit(0);
};

seedDatabase();
