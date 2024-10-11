module.exports = (app) => {
    const flights = require("../controllers/flightcontroller.js");
  
    const router = require("express").Router();
  
    // Tạo chuyến bay
    router.post("/", flights.create);
  
    // Lấy tất cả chuyến bay
    router.get("/", flights.findAll);
  
    // Xóa chuyến bay theo id
    router.delete("/:id", flights.delete);
  
    app.use("/api/flights", router);
  };
  