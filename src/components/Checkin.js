// src/components/Checkin.tsx
import React, { useState } from 'react';
import './Checkin.css'; // Tạo file CSS cho styles nếu cần

const Checkin: React.FC = () => {
    const [bookingCode, setBookingCode] = useState('');
    const [ticketNumber, setTicketNumber] = useState('');
    const [lastName, setLastName] = useState('');

    const handleCheckin = (e: React.FormEvent) => {
        e.preventDefault();
        // Xử lý logic làm thủ tục ở đây
        alert(`Đang làm thủ tục cho: ${lastName}, Mã đặt chỗ: ${bookingCode}, Số vé: ${ticketNumber}`);
    };

    return (
        <div className="checkin-container">
            <h2>Làm Thủ Tục</h2>
            <form onSubmit={handleCheckin}>
                <div className="form-group">
                    <label htmlFor="bookingCode">Mã Đặt Chỗ:</label>
                    <input
                        type="text"
                        id="bookingCode"
                        value={bookingCode}
                        onChange={(e) => setBookingCode(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ticketNumber">Số Vé:</label>
                    <input
                        type="text"
                        id="ticketNumber"
                        value={ticketNumber}
                        onChange={(e) => setTicketNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Họ:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="checkin-button">Làm Thủ Tục</button>
            </form>
        </div>
    );
};

export default Checkin;