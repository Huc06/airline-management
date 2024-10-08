import React from 'react';
import './App.css'; 

const App: React.FC = () => {
    return (
        <div>
            <header className="navbar">
                <h1>Vietnam Airlines</h1>
                <nav>
                    <a href="#">Mua vé</a>
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

            <footer className="footer">
                <p>&copy; 2023 Vietnam Airlines. Tất cả quyền được bảo lưu.</p>
            </footer>
        </div>
    );
}

export default App;