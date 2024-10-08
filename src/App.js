// src/App.tsx
import React, { useState } from 'react';
import './App.css'; 
import TicketBooking from './components/TicketBooking'; // Nhập component TicketBooking

const App: React.FC = () => {
    const [showBooking, setShowBooking] = useState(false); // State để theo dõi việc hiển thị giao diện mua vé

    const handleBookingClick = () => {
        setShowBooking(true); // Hiển thị giao diện mua vé khi nhấp vào
    };

    return (
        <div>
            <header className="navbar">
                <h1>PHUC's plane</h1>
                <nav>
                    <a href="#" onClick={handleBookingClick}>Mua vé</a>
                    <a href="#">Quản lý đặt chỗ</a>
                    <a href="#">Làm thủ tục</a>
                </nav>
            </header>

            <div className="hero">
                <div className="promotion">
                    <h2>15% OFF</h2>
                    <p>Giảm đến 15% khi mua vé qua ứng dụng</p>
                    <button className="explore-button">Khám Phá Ngay</button>
                </div>
            </div>

            {showBooking && <TicketBooking />} {/* Hiển thị giao diện mua vé nếu showBooking là true */}

            <footer className="footer">
                <p>&copy; 2023 PHUC's plane. Tất cả quyền được bảo lưu.</p>
            </footer>
        </div>
    );
};

export default App;