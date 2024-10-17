const db = require("../models");
const Booking = db.booking;
const Passenger = db.passenger;
const Flight = db.flight;

// Tạo đặt chỗ
exports.create = async (req, res) => {
    const { passenger_id, flight_id, status, payment_status } = req.body;

    if (!passenger_id || !flight_id) {
        return res.status(400).send({ message: "Vui lòng cung cấp passenger_id và flight_id." });
    }

    const passengerExists = await Passenger.findByPk(passenger_id);
    if (!passengerExists) {
        return res.status(400).send({ message: "Passenger ID does not exist!" });
    }

    const flightExists = await Flight.findByPk(flight_id);
    if (!flightExists) {
        return res.status(400).send({ message: "Flight ID does not exist!" });
    }

    const booking = {
        passenger_id,
        flight_id,
        status: status || "Confirmed",
        payment_status: payment_status || "Unpaid",
    };

    try {
        const newBooking = await Booking.create(booking);
        res.status(201).json(newBooking);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error creating booking." });
    }
};

// Lấy tất cả đặt chỗ
exports.findAll = async (req, res) => {
    try {
        const bookings = await Booking.findAll();
        res.status(200).json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error retrieving bookings." });
    }
};

// Xóa đặt chỗ theo id
exports.delete = async (req, res) => {
    const id = req.params.id;

    try {
        const num = await Booking.destroy({ where: { booking_id: id } });
        if (num === 1) {
            res.send({ message: "Booking deleted successfully!" });
        } else {
            res.send({ message: `Cannot delete booking with id=${id}.` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Could not delete booking." });
    }
};