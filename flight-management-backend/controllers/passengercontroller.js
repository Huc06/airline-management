const db = require("../models");
const Passenger = db.passenger; // Giả sử bạn đã định nghĩa model Passenger trong models

// Tạo hành khách
exports.create = (req, res) => {
  console.log("Request Body:", req.body);
  if (!req.body.full_name || !req.body.email) {
    return res.status(400).send({ message: "Full Name and Email are required!" });
  }

  const passenger = {
    full_name: req.body.full_name,
    email: req.body.email,
    phone_number: req.body.phone_number,
    passport_number: req.body.passport_number,
    nationality: req.body.nationality,
  };

  Passenger.create(passenger)
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({ message: err.message || "Error creating passenger." })
    );
};

// Lấy tất cả hành khách
exports.findAll = (req, res) => {
  Passenger.findAll()
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({ message: err.message || "Error retrieving passengers." })
    );
};

// Xóa hành khách theo id
exports.delete = (req, res) => {
  const id = req.params.id;

  Passenger.destroy({ where: { passenger_id: id } })
    .then((num) => {
      if (num === 1) {
        res.send({ message: "Passenger deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete passenger with id=${id}.` });
      }
    })
    .catch((err) =>
      res.status(500).send({ message: err.message || "Could not delete passenger." })
    );
};