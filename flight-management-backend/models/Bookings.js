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
                model: 'passengers', // Tên bảng hành khách
                key: 'passenger_id', // Khóa chính trong bảng hành khách
            },
        },
        flight_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'flights', // Tên bảng chuyến bay
                key: 'flight_id', // Khóa chính trong bảng chuyến bay
            },
        },
        booking_date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Mặc định là thời gian hiện tại
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
        Booking.belongsTo(models.Flight, { foreignKey: 'flightNumber' });
    };

    return Booking;
};