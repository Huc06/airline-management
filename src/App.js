// src/App.tsx
import React, { useState } from 'react';
import './App.css'; 
import TicketBooking from './components/TicketBooking'; 
import ManageBooking from './components/BookingManagement';
import Checkin from './components/Checkin'; 
const App: React.FC = () => {
    const [showBooking, setShowBooking] = useState(false); // State để theo dõi việc hiển thị giao diện mua vé

    const handleBookingClick = () => {
        setShowBooking(true); 
    };

    const handleBookingManagement = () => {
        setShowBooking(true); 
    };

    const handleCheckin = () => {
        setShowBooking(true); 
    };

    return (
        <div>
            <header className="navbar">
                <h1>PHUC's plane</h1>
                <nav>
                    <a href="#" onClick={handleBookingClick}>Mua vé</a>
                    <a href="#" onClick={handleBookingManagement}>Quản lý đặt chỗ</a>
                    <a href="#" onClick={handleCheckin}>Làm thủ tục</a>
                </nav>
            </header>

            <div className="hero">
                <div className="promotion">
                    <h2>15% OFF</h2>
                    <p>Giảm đến 15% khi mua vé qua ứng dụng</p>
                    <button className="explore-button">Khám Phá Ngay</button>
                </div>
            </div>

            {showBooking && <TicketBooking />} 
            {showBooking && <ManageBooking />}
            {showBooking && <Checkin />}
             
            <footer className="footer">
                <p>&copy; 2023 PHUC's plane. Tất cả quyền được bảo lưu.</p>
            </footer>
        </div>
    );
};

export default App;