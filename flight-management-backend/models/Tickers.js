module.exports = (sequelize, Sequelize) => {
    const Ticket = sequelize.define("ticket", {
        ticket_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        booking_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'bookings', // Tên bảng đặt chỗ
                key: 'booking_id', // Khóa chính trong bảng đặt chỗ
            },
        },
        seat_number: {
            type: Sequelize.STRING(5),
            allowNull: false,
        },
        class: {
            type: Sequelize.STRING(20),
            allowNull: false,
        },
        issued_date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
    }, {
        tableName: 'tickets', // Tên bảng trong cơ sở dữ liệu
        timestamps: false, // Không tạo các trường createdAt và updatedAt
    });

    return Ticket;
};