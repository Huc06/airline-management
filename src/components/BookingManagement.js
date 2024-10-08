import React from 'react';
import './BookingManagement.css'; // Nhập file CSS

const BookingManagement: React.FC = () => {
    return (
        <div className="booking-management">
            <h2>Quản Lý Đặt Chỗ</h2>
            <div className="booking-container">
                <div className="input-group">
                    <label htmlFor="booking-code">Mã đặt chỗ</label>
                    <input type="text" id="booking-code" placeholder="Nhập mã đặt chỗ" />
                </div>
                <button className="search-button">Tìm Kiếm</button>
            </div>
        </div>
    );
};

export default BookingManagement;