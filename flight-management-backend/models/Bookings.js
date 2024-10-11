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
        },
        flight_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        booking_date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        status: {
            type: Sequelize.STRING(20),
            allowNull: true, // Có thể để null nếu không bắt buộc
        },
        payment_status: {
            type: Sequelize.STRING(20),
            allowNull: true, // Có thể để null nếu không bắt buộc
        },
    }, {
        tableName: 'bookings', // Tên bảng trong cơ sở dữ liệu
        timestamps: true, // Tạo các trường createdAt và updatedAt
    });

    Booking.associate = function(models) {
        // Định nghĩa các mối quan hệ
        Booking.belongsTo(models.Passenger, { foreignKey: 'passenger_id' });
        Booking.belongsTo(models.Flight, { foreignKey: 'flight_id' });
    };

    return Booking;
};