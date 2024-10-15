// flight-management-backend/models/payment.js
module.exports = (sequelize, Sequelize) => {
    const Payment = sequelize.define("payment", {
      amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      paymentMethod: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      transactionId: {
        type: Sequelize.STRING,
        unique: true,
      },
      flightId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'flights',
          key: 'id',
        }
      }
    });
    return Payment;
  };