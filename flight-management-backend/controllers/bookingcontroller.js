// airline-management/flight-management-backend/controllers/bookingcontroller.js
const db = require("../models");
const Booking = db.booking;
const Passenger = db.passenger; // Nhập mô hình Passenger
const Flight = db.flight; // Nhập mô hình Flight

// Tạo đặt chỗ
exports.create = async (req, res) => {
    console.log("Request Body:", req.body);
    const { passenger_id, flightNumber, status, payment_status } = req.body;

    // Kiểm tra xem passenger_id có tồn tại không
    const passengerExists = await Passenger.findByPk(passenger_id);
    if (!passengerExists) {
        return res.status(400).send({ message: "Passenger ID does not exist!" });
    }

    // Kiểm tra xem flightNumber có tồn tại không
    const flightExists = await Flight.findOne({ where: { flightNumber: flightNumber } });
    if (!flightExists) {
        return res.status(400).send({ message: "Flight Number does not exist!" });
    }

    const booking = {
        passenger_id,
        flight_id: flightExists.flight_id, // Lấy flight_id từ flightExists
        status: status || "Confirmed", // Mặc định là "Confirmed" nếu không có
        payment_status: payment_status || "Unpaid", // Mặc định là "Unpaid" nếu không có
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