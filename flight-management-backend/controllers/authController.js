// airline-management/flight-management-backend/controllers/authController.js
const db = require("../models");
const User = db.user; // Đảm bảo dòng này có mặt
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Đăng ký
exports.register = async (req, res) => {
    const { username, email, password } = req.body;

    // Kiểm tra xem người dùng đã tồn tại chưa
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        return res.status(400).send({ message: "User already exists!" });
    }

    // Mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);

    // Tạo người dùng mới
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    res.status(201).send({ message: "User registered successfully!", user });
};

// Đăng nhập
exports.login = async (req, res) => {
    const { email, password } = req.body;

    // Tìm người dùng
    const user = await User.findOne({ where: { email } });
    if (!user) {
        return res.status(400).send({ message: "Invalid credentials!" });
    }

    // Kiểm tra mật khẩu
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).send({ message: "Invalid credentials!" });
    }

    // Tạo token
    const token = jwt.sign({ id: user.id }, "your_jwt_secret", { expiresIn: "1h" });

    res.send({ message: "Login successful!", token });
};