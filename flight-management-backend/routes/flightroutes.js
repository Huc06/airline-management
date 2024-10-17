module.exports = (app) => {
    const flights = require("../controllers/flightcontroller.js");
    const passengers = require("../controllers/passengercontroller");
    const bookings = require("../controllers/bookingcontroller"); 
    const auth = require("../controllers/authController"); 
    const payments = require("../controllers/paymentController");
    const administrators = require("../controllers/adminitratorController.js");
    const tickers = require("../controllers/tickerController.js");
  
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

    // Routes cho thanh toán
    const paymentRouter = require("express").Router();

    // Tạo thanh toán
    paymentRouter.post("/", payments.createPayment); // Route để tạo thanh toán
  
    // Lấy tất cả thanh toán
    paymentRouter.get("/", payments.getAllPayments); // Route để lấy tất cả thanh toán
  
    // Lấy thanh toán theo ID
    paymentRouter.get("/:id", payments.getPaymentById); // Route để lấy thanh toán theo ID
  
    // Cập nhật thanh toán
    paymentRouter.put("/:id", payments.updatePayment); // Route để cập nhật thanh toán
  
    // Xóa thanh toán
    paymentRouter.delete("/:id", payments.deletePayment); // Route để xóa thanh toán
  
    app.use("/api/payments", paymentRouter);

     // Routes cho quản trị viên
     const administratorRouter = require("express").Router(); 

     // Thêm quản trị viên
     administratorRouter.post("/", administrators.addAdministrator); // Route để thêm quản trị viên
   
     // Lấy danh sách quản trị viên
     administratorRouter.get("/", administrators.getAdministrators); // Route để lấy danh sách quản trị viên
   
     // Cập nhật thông tin quản trị viên
     administratorRouter.put("/:id", administrators.updateAdministrator); // Route để cập nhật quản trị viên
   
     // Xóa quản trị viên
     administratorRouter.delete("/:id", administrators.deleteAdministrator); // Route để xóa quản trị viên
   
     app.use("/api/administrators", administratorRouter); // Đăng ký router cho quản trị viên

     // Routes cho Ticker
     const tickerRouter = require("express").Router(); // Tạo router cho Ticker

     // Thêm Ticker mới
     tickerRouter.post('/', tickers.addTicker); // Sửa router thành tickerRouter
 
     // Lấy danh sách Ticker
     tickerRouter.get('/', tickers.getTickers);
 
     // Cập nhật Ticker
     tickerRouter.put('/:id', tickers.updateTicker);
 
     // Xóa Ticker
     tickerRouter.delete('/:id', tickers.deleteTicker);
 
     // Đăng ký router cho Ticker
     app.use('/api/tickers', tickerRouter);
};