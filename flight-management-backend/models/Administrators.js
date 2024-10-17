module.exports = (sequelize, Sequelize) => {
    const Administrator = sequelize.define("administrator", {
        admin_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: Sequelize.STRING(50),
            allowNull: false,
            unique: true, // Đảm bảo tên người dùng là duy nhất
        },
        password_hash: {
            type: Sequelize.STRING(255),
            allowNull: false, // Mật khẩu phải có
        },
        full_name: {
            type: Sequelize.STRING(100),
            allowNull: false, // Tên đầy đủ phải có
        },
        email: {
            type: Sequelize.STRING(100),
            allowNull: false,
            unique: true, // Đảm bảo email là duy nhất
        },
        role: {
            type: Sequelize.STRING(50),
            allowNull: true, // Vai trò có thể để null
        },
    }, {
        tableName: 'administrators', // Tên bảng trong cơ sở dữ liệu
        timestamps: true, // Tạo các trường createdAt và updatedAt
    });

    return Administrator;
};