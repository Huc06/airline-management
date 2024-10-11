const db = require("../models");
const Booking = db.booking;

// Tạo đặt chỗ
exports.create = (req, res) => {
    console.log("Request Body:", req.body);
    if (!req.body.passenger_id || !req.body.flight_id) {
        return res.status(400).send({ message: "Passenger ID and Flight ID are required!" });
    }

    const booking = {
        passenger_id: req.body.passenger_id,
        flight_id: req.body.flight_id,
        status: req.body.status || "Confirmed", // Mặc định là "Confirmed" nếu không có
        payment_status: req.body.payment_status || "Unpaid", // Mặc định là "Unpaid" nếu không có
    };

    Booking.create(booking)
        .then((data) => res.send(data))
        .catch((err) =>
            res.status(500).send({ message: err.message || "Error creating booking." })
        );
};

// Lấy tất cả đặt chỗ
exports.findAll = (req, res) => {
    Booking.findAll()
        .then((data) => res.send(data))
        .catch((err) =>
            res.status(500).send({ message: err.message || "Error retrieving bookings." })
        );
};

// Xóa đặt chỗ theo id
exports.delete = (req, res) => {
    const id = req.params.id;

    Booking.destroy({ where: { booking_id: id } })
        .then((num) => {
            if (num === 1) {
                res.send({ message: "Booking deleted successfully!" });
            } else {
                res.send({ message: `Cannot delete booking with id=${id}.` });
            }
        })
        .catch((err) =>
            res.status(500).send({ message: err.message || "Could not delete booking." })
        );
};