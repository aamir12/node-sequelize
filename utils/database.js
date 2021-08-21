const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.DB_NAME,
  process.DB_USERNAME,
  process.DB_PASSWORD,
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = sequelize;
