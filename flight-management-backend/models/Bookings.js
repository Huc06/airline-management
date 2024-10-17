module.exports = (sequelize, Sequelize) => {
    const Booking = sequelize.define("booking", {
        booking_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        passenger_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'passengers',
                key: 'passenger_id',
            },
        },
        flight_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'flights',
                key: 'flight_id',
            },
        },
        status: {
            type: Sequelize.STRING(20),
            defaultValue: "Confirmed",
        },
        payment_status: {
            type: Sequelize.STRING(20),
            defaultValue: "Unpaid",
        },
    }, {
        tableName: 'bookings',
        timestamps: true, // Tạo các trường createdAt và updatedAt
    });

    Booking.associate = function(models) {
        Booking.belongsTo(models.passenger, { foreignKey: 'passenger_id' });
        Booking.belongsTo(models.flight, { foreignKey: 'flight_id' });
        Booking.hasMany(models.ticket, { foreignKey: 'booking_id' }); // Một booking có nhiều ticket
    };

    return Booking;
};