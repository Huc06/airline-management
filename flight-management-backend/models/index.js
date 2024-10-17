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
db.user = require("./user.js")(sequelize, Sequelize); 

// Nhập model Payment
db.payment = require("./payment.js")(sequelize, Sequelize);

// Nhập model Administrator
db.administrator = require("./Administrators.js")(sequelize, Sequelize); 

// Nhập model Ticker
db.ticker = require("./Tickers.js")(sequelize, Sequelize);

// Thiết lập mối quan hệ
db.booking.associate = function(models) {
    db.booking.belongsTo(models.passenger, { foreignKey: 'passenger_id' });
    db.booking.belongsTo(models.flight, { foreignKey: 'flight_id' });
    // db.booking.hasMany(models.ticket, { foreignKey: 'booking_id' });
};

db.passenger.associate = function(models) {
    db.passenger.hasMany(models.booking, { foreignKey: 'passenger_id' });
};

db.flight.associate = function(models) {
    db.flight.hasMany(models.booking, { foreignKey: 'flight_id' });
    db.flight.hasMany(models.payment, { foreignKey: 'flightId' });
};

db.payment.associate = function(models) {
    db.payment.belongsTo(models.flight, { foreignKey: 'flightId' });
};

db.administrator.associate = function(models) {
    // db.administrator.hasMany(models.someModel, { foreignKey: 'admin_id' });
}; 

db.ticker.associate = function(models) {
    // Nếu cần thiết, có thể thêm mối quan hệ ở đây
};

// Gọi hàm associate cho tất cả các mô hình
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

module.exports = db;