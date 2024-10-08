// src/components/TicketBooking.tsx
import React from 'react';
import './TicketBooking.css'; // Tạo file CSS cho component này

const TicketBooking: React.FC = () => {
    return (
        <div className="ticket-booking">
            <h2>Mua Vé</h2>
            <div className="booking-container">
                <div className="input-group">
                    <label htmlFor="from">Từ</label>
                    <input type="text" id="from" placeholder="Điểm đi" />
                </div>
                <div className="input-group">
                    <label htmlFor="to">Đến</label>
                    <input type="text" id="to" placeholder="Điểm đến" />
                </div>
                <div className="input-group">
                    <label htmlFor="departure-date">Ngày đi</label>
                    <input type="date" id="departure-date" />
                </div>
                <div className="input-group">
                    <label htmlFor="return-date">Ngày về</label>
                    <input type="date" id="return-date" />
                </div>
                <button className="search-button">Tìm Chuyến Bay</button>
            </div>
        </div>
    );
};

export default TicketBooking;