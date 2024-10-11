module.exports = (app) => {
    const flights = require("../controllers/flightcontroller.js");
    const passengers = require("../controllers/passengercontroller");
    const bookings = require("../controllers/bookingcontroller"); 
  
    const router = require("express").Router();
  
    // Tạo chuyến bay
    router.post("/", flights.create);
  
    // Lấy tất cả chuyến bay
    router.get("/", flights.findAll);
  
    // Xóa chuyến bay theo id
    router.delete("/:id", flights.delete);
  
    app.use("/api/flights", router);

    // Routes cho hành khách
    const passengerRouter = require("express").Router();

    // Tạo hành khách
    passengerRouter.post("/", passengers.create);
  
    // Lấy tất cả hành khách
    passengerRouter.get("/", passengers.findAll);
  
    // Xóa hành khách theo id
    passengerRouter.delete("/:id", passengers.delete);
  
    app.use("/api/passengers", passengerRouter);

     // Routes cho đặt chỗ
     const bookingRouter = require("express").Router(); 

     // Tạo đặt chỗ
     bookingRouter.post("/", bookings.create); 
   
     // Lấy tất cả đặt chỗ
     bookingRouter.get("/", bookings.findAll); 
   
     // Xóa đặt chỗ theo id
     bookingRouter.delete("/:id", bookings.delete); 
   
     app.use("/api/bookings", bookingRouter); 
  };
  