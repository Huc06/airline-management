const db = require("../models");
const Flight = db.flight;
// Tạo chuyến bay
exports.create = (req, res) => {
 
  console.log("Request Body:", req.body);
  if (!req.body.flightNumber) {
    return res.status(400).send({ message: "Flight Number is required!" });
  }

  const flight = {
    flightNumber: req.body.flightNumber,
    departure: req.body.departure,
    destination: req.body.destination,
    departureTime: req.body.departureTime,
    arrivalTime: req.body.arrivalTime,
    status: req.body.status,
  };

  Flight.create(flight)
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({ message: err.message || "Error creating flight." })
    );
};

// Lấy tất cả chuyến bay
exports.findAll = (req, res) => {
  Flight.findAll()
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({ message: err.message || "Error retrieving flights." })
    );
};

// Xóa chuyến bay theo id
exports.delete = (req, res) => {
  const id = req.params.id;

  Flight.destroy({ where: { id: id } })
    .then((num) => {
      if (num === 1) {
        res.send({ message: "Flight deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete flight with id=${id}.` });
      }
    })
    .catch((err) =>
      res.status(500).send({ message: err.message || "Could not delete flight." })
    );
};
