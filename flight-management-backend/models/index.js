const dbConfig = require("../config/db.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Nhập model Flight
db.flight = require("./flight.js")(sequelize, Sequelize);

// Nhập model Passenger
db.passenger = require("./passenger.js")(sequelize, Sequelize);

// Nhập model Bookings
db.passenger = require("./Bookings.js")(sequelize, Sequelize);

module.exports = db;
