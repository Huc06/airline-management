const db = require('../models'); // Nhập mô hình

// Thêm quản trị viên mới
exports.addAdministrator = async (req, res) => {
    try {
        const { username, password, full_name, email, role } = req.body;
        const newAdmin = await db.administrator.create({ 
            username, 
            password_hash: hashPassword(password), 
            full_name, 
            email, 
            role 
        });
        res.status(201).json(newAdmin);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi thêm quản trị viên', error });
    }
};

// Lấy danh sách quản trị viên
exports.getAdministrators = async (req, res) => {
    try {
        const admins = await db.administrator.findAll();
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi lấy danh sách quản trị viên', error });
    }
};

// Cập nhật thông tin quản trị viên
exports.updateAdministrator = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        await db.administrator.update(updates, { where: { admin_id: id } });
        res.status(200).json({ message: 'Cập nhật thành công' });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi cập nhật quản trị viên', error });
    }
};

// Xóa quản trị viên
exports.deleteAdministrator = async (req, res) => {
    try {
        const { id } = req.params;
        await db.administrator.destroy({ where: { admin_id: id } });
        res.status(200).json({ message: 'Xóa thành công' });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi xóa quản trị viên', error });
    }
};

// Hàm mã hóa mật khẩu (giả định)
function hashPassword(password) {
    // Thực hiện mã hóa mật khẩu ở đây
    return password; // Thay thế bằng mã hóa thực tế
}