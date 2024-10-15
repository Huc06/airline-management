module.exports = (sequelize, Sequelize) => {
    const Flight = sequelize.define("flight", {
      // flight_id: { 
      //   type: Sequelize.INTEGER,
      //   autoIncrement: true,
      //   primaryKey: true,
      // },
      flightNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      departure: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      destination: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      departureTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      arrivalTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
    return Flight;
  };
  