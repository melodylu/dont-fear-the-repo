// establish Sequelize database connection to heroku postgres

import Sequelize from 'sequelize';

let envDatabaseVar;
let db;

try {
  // see if running local on a dev environment
  envDatabaseVar = require('../localPWD.js');
} catch (err) {
  // must be in deployment, look for heroku ENV_VAR DATABASE_URL
  console.log('Using ENV_VAR from heroku:');
  envDatabaseVar = {
    url: process.env.DATABASE_URL
  };
}

db = new Sequelize(envDatabaseVar.url, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  }
});
module.exports = db;
