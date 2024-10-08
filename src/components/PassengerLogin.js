import React, { useState } from "react";

function PassengerLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Gọi API đăng nhập
  };

  return (
    <div>
      <h1>Đăng Nhập Hành Khách</h1>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Tên đăng nhập" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Mật khẩu" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Đăng Nhập</button>
      </form>
    </div>
  );
}

export default PassengerLogin;
