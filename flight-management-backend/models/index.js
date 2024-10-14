// airline-management/flight-management-backend/models/index.js
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

// Nhập model Booking
db.booking = require("./Bookings.js")(sequelize, Sequelize);

// Nhập model User
db.user = require("./user.js")(sequelize, Sequelize); // Đảm bảo dòng này có mặt

// Thiết lập mối quan hệ
db.booking.associate = function(models) {
    db.booking.belongsTo(models.passenger, { foreignKey: 'passenger_id' });
    db.booking.belongsTo(models.flight, { foreignKey: 'flight_id' });
};

db.passenger.associate = function(models) {
    db.passenger.hasMany(models.booking, { foreignKey: 'passenger_id' });
};

db.flight.associate = function(models) {
    db.flight.hasMany(models.booking, { foreignKey: 'flight_id' });
};

// Gọi hàm associate cho tất cả các mô hình
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

module.exports = db;