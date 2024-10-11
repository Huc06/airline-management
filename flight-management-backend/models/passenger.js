module.exports = (sequelize, Sequelize) => {
    const Passenger = sequelize.define("passenger", {
        passenger_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        full_name: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING(100),
            unique: true,
            allowNull: false,
        },
        phone_number: {
            type: Sequelize.STRING(15),
            allowNull: true,
        },
        passport_number: {
            type: Sequelize.STRING(20),
            allowNull: true,
        },
        nationality: {
            type: Sequelize.STRING(50),
            allowNull: true,
        },
        date_of_birth: {
            type: Sequelize.DATE,
            allowNull: true,
        },
        gender: {
            type: Sequelize.STRING(10),
            allowNull: true,
        },
    }, {
        timestamps: false // Tắt tính năng tự động tạo createdAt và updatedAt
    });
    return Passenger;
};