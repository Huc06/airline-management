module.exports = (app) => {
    const flights = require("../controllers/flightcontroller.js");
    const passengers = require("../controllers/passengercontroller");
    const bookings = require("../controllers/bookingcontroller"); 
    const auth = require("../controllers/authController"); 

  
    const router = require("express").Router();

     // Routes cho đăng ký và đăng nhập
     router.post("/register", auth.register); // Route đăng ký
     router.post("/login", auth.login); // Route đăng nhập
 
     // Các route khác...
     app.use("/api/auth", router);
  
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
    bookingRouter.post("/", bookings.create); // Route để tạo đặt chỗ
  
    // Lấy tất cả đặt chỗ
    bookingRouter.get("/", bookings.findAll); // Route để lấy tất cả đặt chỗ
  
    // Xóa đặt chỗ theo id
    bookingRouter.delete("/:id", bookings.delete); // Route để xóa đặt chỗ theo ID
  
    app.use("/api/bookings", bookingRouter); // Đăng ký router cho đặt chỗ
};