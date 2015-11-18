// establish Sequelize database connection to heroku postgres

var Sequelize = require("sequelize");

var env_database_var;

try {
  // see if running local on a dev environment
  env_database_var = require("../localPWD.js");
} catch (err) {
  // must be in deployment, look for heroku ENV_VAR DATABASE_URL
  console.log("Using ENV_VAR from heroku:");
  env_database_var = {
    url: process.env.DATABASE_URL
  };
}

var db = new Sequelize(env_database_var.url, {
  dialect: "postgres",
  dialectOptions: {
    ssl: true
  }
});

module.exports = db;
