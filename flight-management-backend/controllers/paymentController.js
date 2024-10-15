// airline-management/flight-management-backend/controllers/paymentController.js
const db = require("../models");
const Payment = db.payment;

// Tạo một Payment mới
exports.createPayment = async (req, res) => {
    try {
        const payment = await Payment.create(req.body);
        res.status(201).json(payment);
    } catch (error) {
        res.status(500).json({ message: "Lỗi khi tạo thanh toán", error: error.message });
    }
};

// Lấy tất cả Payments
exports.getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.findAll();
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ message: "Lỗi khi lấy danh sách thanh toán", error: error.message });
    }
};

// Lấy một Payment theo ID
exports.getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findByPk(req.params.id);
        if (!payment) {
            return res.status(404).json({ message: "Không tìm thấy thanh toán" });
        }
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ message: "Lỗi khi lấy thanh toán", error: error.message });
    }
};

// Cập nhật một Payment
exports.updatePayment = async (req, res) => {
    try {
        const payment = await Payment.findByPk(req.params.id);
        if (!payment) {
            return res.status(404).json({ message: "Không tìm thấy thanh toán" });
        }
        await payment.update(req.body);
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ message: "Lỗi khi cập nhật thanh toán", error: error.message });
    }
};

// Xóa một Payment
exports.deletePayment = async (req, res) => {
    try {
        const payment = await Payment.findByPk(req.params.id);
        if (!payment) {
            return res.status(404).json({ message: "Không tìm thấy thanh toán" });
        }
        await payment.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: "Lỗi khi xóa thanh toán", error: error.message });
    }
};