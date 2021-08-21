const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sequelizedb", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

try {
  sequelize.authenticate();
  console.log(`DB connected successfully`.green.bold);
} catch (error) {
  console.error(`Unable to connect to the database: ${error}`.red.bold);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("./users")(sequelize, DataTypes);

//apply force only when database name ends with -test
// db.sequelize.sync({ force: true, match: /-test$/ }).then(() => {
//   console.log("DB synch successfully");
// });

db.sequelize.sync({ force: false }).then(() => {
  console.log("DB synch successfully");
});

module.exports = db;
